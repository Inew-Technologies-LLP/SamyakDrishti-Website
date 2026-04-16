import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Footer from "../components/Footer";

// ==========================================
// DATA: Services & FAQs
// ==========================================
const defaultFAQs = [
  { 
    question: "How often should I get an eye check-up?", 
    answer: "Adults should get a routine eye exam once a year. Children, seniors, or people with medical conditions may need more frequent checks." 
  },
  { 
    question: "What should I bring to my appointment?", 
    answer: "Bring your glasses, contact lenses, previous reports, medication list, and any questions you want to discuss." 
  },
  { 
    question: "How do I book an appointment?", 
    answer: "You can call the clinic or schedule a visit online through our website." 
  },
  { 
    question: "Do you use advanced technology for diagnosis?", 
    answer: "Yes. We use advanced imaging and diagnostic equipment to detect issues early and guide accurate treatment." 
  },
  { 
    question: "What symptoms should I not ignore?", 
    answer: "Sudden vision loss, flashes of light, persistent pain, redness, and floaters should be evaluated immediately." 
  },
  { 
    question: "Do you treat children as well as adults?", 
    answer: "Yes. We provide complete eye care for children, adults, and seniors." 
  },
  { 
    question: "Can I get a same-day appointment in an emergency?", 
    answer: "Yes. For urgent symptoms, we accommodate same-day visits whenever possible." 
  },
  { 
    question: "Do you offer second opinions?", 
    answer: "Yes. If you have been advised Lasik, cataract surgery, or another treatment elsewhere, you can visit us for a clear and unbiased second opinion." 
  }
];

const servicesData = [
  { 
    id: "routine-eye-test",
    title: "Routine Eye Test", 
    desc: "Vital health check that assesses your vision and screens for underlying conditions.",
    detail: {
      image: "/Routine eye test.png",
      whyChoose: ["Identifies vision changes early before they cause difficulty.", "Complete screening that keeps your eyes healthy year after year."],
      bestFor: "Everyone (children to elderly), especially if you have a family history of eye problems or need regular check-ups.",
      howItWorks: [
        "This test examines your visual acuity, digital refraction (spectacle number check), eye pressure and the external, anterior and posterior (if needed) parts of the eyes to evaluate the function of your eyes.",
        
        "If the posterior part of the eye needs to be examined, dilating eyedrops are generally required. You may have to wait for 20-30 minutes for the eyedrops to take effect. The vision maybe blurry for the next 3-4 hours.",
        <>
          <strong className="font-bold text-[#1b2a4e]">Advanced Diagnostics:</strong><br/>
          Based on the general eye test, additional tests maybe suggested. Multiple diagnostic devices such as optical biometry, corneal topography, corneal tomography, corneal biomechanics, macula OCT, retina OCT, fundus photography and computerized perimetry, as indicated may be used to provide detailed measurements of your eyes structures with high-resolution imaging. We also check eye pressure using tonometry and screen for common conditions like glaucoma, cataract, or retinal changes.
        </>,
        
        "These advanced scans enable our specialists to detect early changes that often have no symptoms. If any pathology is found, we guide you on the right treatment, whether it is lifestyle changes, glasses, eye drops, further specialized tests or eye surgery. The goal is early detection and prevention of vision loss through complete health screening."
      ]
    },
    faqs: [
      { 
        question: "What tests are performed during the exam?", 
        answer: (
          <>
            <p className="mb-2">Your examination will include a series of quick and painless tests, such as:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Detailed history and assessment of visual needs</li>
              <li>Visual acuity test: Reading a chart to measure how clearly you see.</li>
              <li>Refraction: Determining your precise lens prescription.</li>
              <li>Eye pressure test (tonometry): Screening for glaucoma.</li>
              <li>Slit-lamp examination: A microscope to check the front of your eye.</li>
              <li>Fundus examination: Checking the retina and optic nerve at the back of your eye, often with pupil dilation or digital retinal imaging.</li>
            </ul>
          </>
        ) 
      },
      { 
        question: "How often should I have an eye test?", 
        answer: (
          <>
            <p className="mb-2">We recommend a routine eye test every two years for most adults. However, you may need more frequent appointments if you:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Are over 50.</li>
              <li>Are a child wearing spectacles.</li>
              <li>Have diabetes, hypertension, glaucoma, or a family history of eye disease.</li>
              <li>Have noticeably changed or worsening vision.</li>
              <li>Your doctor will advise you on the best recall interval for your individual eye health.</li>
            </ul>
          </>
        ) 
      },
      { 
        question: "What can a comprehensive eye exam detect?", 
        answer: "Beyond short-sightedness, farsightedness or astigmatism, our eye exams can detect signs of over 200 health conditions. These include eye diseases like cataract, corneal conditions, glaucoma and diabetic or hypertensive retinopathy. Early detection is key to preventing vision loss." 
      },
      { 
        question: "What is pupil dilation and will I need it?", 
        answer: "Pupil dilation uses eye drops to give us a clear view of the back of your eye, especially the retina periphery. It can cause temporary light sensitivity and blurry near vision for a few hours. Whether you need pupil dilation will depend on preliminary eye tests we conduct when you visit." 
      },
      { 
        question: "How long will the examination take?", 
        answer: "Please allow 45 minutes to an hour for a full comprehensive eye test. The duration ensures we have enough time for all necessary tests and to discuss our findings and any recommendations with you thoroughly." 
      },
      { 
        question: "Will the eye test be painful?", 
        answer: "No, the examination is completely painless. Some tests involve bright lights or a brief puff of air, but none are invasive or cause pain. The dilation drops may cause a mild, temporary stinging sensation." 
      }
    ]
  },
  { 
    id: "dry-eye-clinic",
    title: "Dry Eye Clinic", 
    desc: "Dry eye is extremely common today because of long screen hours, air-conditioning, and reduced blinking. Our Dry Eye Clinic identifies the exact reason behind your symptoms.",
    detail: {
      image: "/Dry Eye .png",
      whyChoose: ["Expert screening to pinpoint the root cause of dryness.", "Targeted treatments that provide long-term relief."],
      bestFor: "Anyone experiencing dryness, burning, grittiness, watering, or irritation that does not improve with regular lubricating drops.",
      howItWorks: [
        "We check how your tears work using tests like Tear Break-Up Time (TBUT), the Schirmer test, and meibomian gland imaging. This shows whether the dryness is from low tear production or blocked oil glands.",
        
        "Treatment depends on the root cause and may include lubricating drops, warm compresses, anti-inflammatory medicines, or advanced options like Intense Pulsed Light (IPL) therapy and gland expression for long-lasting relief. IPL treatment uses gentle pulses of light to reduce inflammation, stimulate meibomian glands to produce more natural oils, improve tear film quality, and provide significant symptom relief. Our focus is on targeting the upstream inflammatory causes of dry eye to provide lasting comfort and improved eye health."
      ]
    },
    faqs: [
      { 
        question: "What are the symptoms?", 
        answer: (
          <>
            <p className="mb-2">Symptoms often include:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>A gritty, itchy, or burning sensation.</li>
              <li>Redness and irritation.</li>
              <li>Watery eyes (as the eye overproduces poor-quality 'reflex' tears).</li>
              <li>Blurred vision that may clear with blinking.</li>
              <li>Sensitivity to light.</li>
              <li>Discomfort when wearing contact lenses or looking at screens.</li>
            </ul>
          </>
        ) 
      },
      { 
        question: "What are the treatment options?", 
        answer: (
          <>
            <p className="mb-2">Treatment is tailored to the cause and severity of your dryness:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Everyday Care:</strong> Artificial tears, warm compresses, eyelid hygiene, and environmental changes.</li>
              <li><strong>Prescription Treatments:</strong> Anti-inflammatory drops or medications to boost tear production.</li>
              <li><strong>In-Clinic Procedures:</strong> Advanced options like IPL therapy, punctal plugs, and thermal treatment.</li>
              <li><strong>LipiFlow®:</strong> LipiFlow is a treatment that uses gentle heat and pressure to unblock oil glands and restore your eye's natural moisture. (Please note, LipiFlow is performed by Dr Sujal Shah at Sir H N Reliance Foundation Hospital)</li>
            </ul>
          </>
        ) 
      },
      { 
        question: "Are over-the-counter eye drops safe to use?", 
        answer: "While they can offer temporary relief, it's best to get a diagnosis first. There are different types of drops for different causes of dry eye. Using the wrong one might not help, and some drops with preservatives can irritate with long-term use. We can recommend the most suitable product for you." 
      },
      { 
        question: "Who specializes in dry eye at your clinic?", 
        answer: "Dr. Manisha Shah specializes in diagnosing and managing complex dry eye, with expertise in cases related to screen use and post-refractive surgery care, providing clear and detailed guidance to her patients." 
      },
      { 
        question: "Can watery eyes really mean I have dry eyes?", 
        answer: "Yes, this is a common paradox. When the eye is dry and irritated, it can trigger an overproduction of the wrong type of tears (reflex tears). These are mostly water and lack the necessary oils and lubricants to properly soothe and protect the eye, leading to a cycle of dryness and watering." 
      },
      { 
        question: "How is it diagnosed?", 
        answer: (
          <>
            <p className="mb-2">Our thorough evaluation pinpoints the exact cause of your dryness. We use advanced diagnostics including:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Tear film assessment to check stability and quality.</li>
              <li>Schirmer's test to measure your tear production volume.</li>
            </ul>
            <p className="mt-2">This detailed analysis allows us to create a targeted treatment plan for you.</p>
          </>
        ) 
      }
    ]
  },
  { 
    id: "keratoconus-clinic",
    title: "Keratoconus Clinic", 
    desc: "Specialised treatment for keratoconus, a condition that causes the cornea to become thin and irregular in shape.",
    detail: {
      image: "/Keratoconus.jpg",
      whyChoose: ["Specialised imaging to detect and track progression early.", "Customised treatments to improve vision with cross linking to stop progression."],
      bestFor: "People with keratoconus, irregular corneas, or distorted vision.",
      howItWorks: [
        "We map your cornea using detailed corneal topography to create a colour-coded map showing the shape and irregularity, and measure thickness with pachymetry (using ultrasonic technology) to see how advanced the condition is. Tomography scans give a detailed three-dimensional view of corneal shape and thickness, helping us determine the exact stage of keratoconus and assess whether your cornea has adequate thickness for treatment. Treatment depends on the stage and may include specialized contact lenses (rigid gas permeable, scleral, or hybrid lenses) designed to vault over the irregular cone and provide clear vision.",
        
        "Corneal cross-linking (CXL) is a breakthrough treatment that halts progression by strengthening collagen fibers in the cornea. The procedure uses riboflavin and UV light to create cross-links between collagen molecules, increasing biomechanical resistance of the cornea severalfold.",
        
        "For some cases, limited topography guided laser ablation can be done to regularize the cornea and improve vision, combined with cross-linking for optimal results. In severe, advanced cases, a corneal transplant may be necessary. Early detection and treatment protects vision and reduces the future risk of needing a transplant, making early detection and intervention critical for preserving sight."
      ]
    },
    faqs: [
      { 
        question: "What causes keratoconus?", 
        answer: (
          <>
            <p className="mb-2">The exact cause is not fully understood, but it is often linked to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>A genetic predisposition.</li>
              <li>Chronic and vigorous eye rubbing is a significant risk factor.</li>
              <li>Associated conditions like allergies, eczema, and asthma.</li>
            </ul>
          </>
        ) 
      },
      { 
        question: "What are the symptoms?", 
        answer: (
          <>
            <p className="mb-2">Symptoms often begin early and may include:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Increasingly blurred or distorted vision.</li>
              <li>Frequent changes in your spectacle prescription.</li>
              <li>Heightened sensitivity to light and glare.</li>
              <li>Seeing 'ghosting' or multiple images.</li>
              <li>Streaking or flaring around lights, especially at night.</li>
            </ul>
          </>
        ) 
      },
      { 
        question: "How is keratoconus diagnosed?", 
        answer: (
          <>
            <ol className="list-decimal pl-5 space-y-2">
              <li>We use advanced corneal imaging for precise diagnosis and monitoring.</li>
              <li><strong>Corneal Topography:</strong> This studies the shape of the front surface of the cornea.</li>
              <li><strong>Tomography:</strong> This is an important test. It creates a detailed 3D map of your corneal surface, thickness, and shape, revealing even subtle irregularities.</li>
              <li><strong>Corneal biomechanics:</strong> This studies the biomechanical strength of the cornea and is a vital test for suitability for Lasik. It combines the information from the tomography and biomechanics to determine longterm safety and stability after Lasik. This test is available only at select premium Lasik centres. It helps in detecting early and very subtle changes of keratoconus, before topography and tomography can detect them.</li>
            </ol>
          </>
        ) 
      },
      { 
        question: "What are the treatment options?", 
        answer: (
          <>
            <p className="mb-2">Treatment is tailored to the stage and progression of the condition.</p>
            <p className="mb-2"><strong>Vision Correction:</strong> In early stages, spectacles or soft contact lenses may help. For moderate to advanced cases, specialist rigid gas permeable (RGP), hybrid, or scleral contact lenses are the mainstay for providing clear, stable vision. In early stages, customized topography guided surface ablation can be performed to regularize the cornea followed by crosslinking. Other treatments include intracorneal ring segments (ICRS), corneal allogenic intrastromal ring segments (CAIRS), partial thickness keratoplasty (DALK) or full thickness keratoplasty (PKP).</p>
            <p><strong>Halting Progression:</strong> Corneal Collagen Cross-Linking (CXL) is the breakthrough treatment to stabilize the cornea and prevent further thinning and bulging.</p>
          </>
        ) 
      },
      { 
        question: "What is the main goal of treatment?", 
        answer: "The goal is to halt the progression of the disease by strengthening the cornea." 
      },
      { 
        question: "What does the CXL procedure involve?", 
        answer: (
          <>
            <p className="mb-2">CXL is a one-hour in-clinic procedure performed under topical anaesthesia. We use the proven epithelial-off technique:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>The thin surface layer (epithelium) of the cornea is gently removed.</li>
              <li>Riboflavin (Vitamin B2) eye drops are applied to saturate the corneal tissue for about 30 minutes followed by exposure to calibrated UV light.</li>
            </ul>
          </>
        ) 
      },
      { 
        question: "Who is the ideal candidate for Corneal Cross-Linking (CXL)?", 
        answer: "The best candidates are typically younger patients (under 30) with early to moderate keratoconus." 
      },
      { 
        question: "What is the recovery like after CXL?", 
        answer: (
          <>
            <p className="mb-2">As the surface layer heals, you can expect:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Discomfort:</strong> Some pain or grittiness is common for the first 2-3 days, managed with prescribed pain relief and eye drops.</li>
              <li><strong>Vision:</strong> Vision will be blurry initially, clearing as the surface heals over about a week. Fluctuations may continue for a few weeks.</li>
              <li><strong>Activity:</strong> Most patients can return to non-strenuous work within a week.</li>
            </ul>
          </>
        ) 
      },
      { 
        question: "How successful is CXL?", 
        answer: "Corneal Cross-Linking (CXL) is a groundbreaking treatment with over a 95% success rate in stopping keratoconus from worsening." 
      },
      { 
        question: "What is CXL Plus ?", 
        answer: "For some patients with early to moderate keratoconus, limited excimer laser treatment is performed to regularise the surface of the cornea. This is immediately followed by crosslinking to maintain the regularized shape." 
      }
    ]
  },
    { 
    id: "cornea-clinic",
    title: "Cornea Clinic", 
    desc: "Comprehensive care for corneal diseases, infections, and injuries.",
    detail: {
      image: "/cornea-clinic.jpg", 
      whyChoose: [
        "Accurate diagnosis with detailed corneal imaging.",
        "Full range of treatments for infections, scars, and surface disease."
      ],
      bestFor: "Those with corneal infections, scarring, irregular astigmatism, or post-surgery issues.",
      howItWorks: [
        "We examine the cornea under high magnification (slit lamp), use special stains (like fluorescein, lissamine green, and rose bengal) to highlight dryness, erosions, or infection, and scan the cornea with OCT (Optical Coherence Tomography) to get detailed cross-sectional images of corneal thickness and shape. We also perform corneal pachymetry, corneal topography, corneal tomography and corneal biomechanics. These comprehensive tests help us diagnose infections (bacterial, viral, or fungal), scars from injury or surgery, corneal dystrophies (inherited conditions), corneal ectasia and surface disease problems.",
        
        "Treatment may include medicated eye drops (antibiotics for infection, antivirals for herpes keratitis, anti-inflammatory drops), protective contact lenses to shield the cornea and promote healing, minor procedures like corneal debridement to remove damaged tissue, bandage contact lenses for recurrent erosions, or in advanced cases, corneal transplantation. For post-surgical complications such as irregular astigmatism after cataract or Lasik surgery, we offer specialised solutions. The aim is to clear the cornea, restore comfort, improve vision, and prevent complications like scarring or neovascularisation that could permanently damage sight. Our comprehensive approach addresses both the acute problem and prevents long term vision loss."
      ]
    },
    faqs: [
      { 
        question: "What is the cornea?", 
        answer: "The cornea is the clear, front window of your eye. It helps to focus light so you can see clearly." 
      },
      { 
        question: "When should I see a cornea specialist?", 
        answer: (
          <>
            <p className="mb-2">You should see us if you have:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Ongoing eye pain or redness that won't go away</li>
              <li>A feeling that something is constantly stuck in your eye</li>
              <li>Blurred or cloudy vision that has developed</li>
              <li>Extreme sensitivity to light</li>
              <li>Any injury to the surface of your eye</li>
            </ul>
          </>
        ) 
      },
      { 
        question: "What is a corneal ulcer?", 
        answer: "An ulcer is a serious infected sore on the cornea, like an abscess. It can cause severe pain, redness, and vision loss. It needs immediate medical treatment with strong antibiotic or antifungal drops to clear the infection and prevent scarring." 
      },
      { 
        question: "How do you find out what's wrong with my cornea?", 
        answer: "We use special tests that take detailed pictures and measurements of your cornea. These painless tests show us the shape, thickness, and health of every layer." 
      },
      { 
        question: "What types of corneal transplants are there?", 
        answer: (
          <>
            <p className="mb-2">There are different types, depending on which layer of the cornea is damaged:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Full-thickness transplant (Penetrating keratoplasty PKP):</strong> Replaces all layers of the cornea.</li>
              <li><strong>Partial-thickness transplant (DALK):</strong> Replaces only selective layers of the cornea as needed. In some cases, only the front and middle layers, leaving the back layer intact (Deep anterior lamellar keratoplasty DALK). This often has a faster recovery.</li>
              <li><strong>Inner-layer transplant (DSAEK):</strong> A very thin transplant of only the deepest cell layer, used for specific types of swelling.</li>
            </ul>
          </>
        ) 
      },
      { 
        question: "What is recovery like after a transplant?", 
        answer: "Your vision will be blurry at first and will improve gradually over several weeks or months as your eye heals. You will need to use medicated eye drops for a long time to prevent rejection and infection." 
      },
      { 
        question: "What is a scratched cornea (abrasion)?", 
        answer: "This is a scrape on the surface of your eye, often from getting poked by a fingernail, a tree branch, or from a dirty contact lens. It can be very painful and feel like something is in your eye. It needs treatment to heal properly and avoid infection." 
      }
    ]
  },
  { 
    id: "glaucoma-clinic",
    title: "Glaucoma Clinic", 
    desc: "Early detection and management of glaucoma, a condition that damages the optic nerve.",
    detail: {
      image: "/Glaucoma.png",
      whyChoose: ["Early diagnosis using specialised scans and pressure testing.", "Individualised treatment to maintain stable pressure and protect the optic nerve."],
      bestFor: "Adults over 40, those with family history of glaucoma, or anyone with high eye pressure.",
      howItWorks: [
        "We measure your eye pressure with tonometry and perform specialized imaging to scan your optic nerve using OCT RNFL (Retinal Nerve Fiber Layer) scanning to detect thinning that indicates nerve damage. We check your side vision with a visual field test to identify any blind spots caused by glaucoma. We also examine the drainage angle with gonioscopy to confirm the glaucoma type and assess how well fluid is draining from your eye. Early detection is crucial because glaucoma is often called \"the silent thief of sight\".",
        
        "It typically has no symptoms until significant optic nerve damage has occurred. Our comprehensive assessment identifies risk factors and early changes before vision loss develops. Treatment may include pressure-lowering drops, laser procedures like selective laser trabeculoplasty (SLT) to improve fluid drainage, minimally invasive glaucoma surgery (MIGS), trabeculectomy or shunt surgery depending on how advanced the condition is. The goal is to stabilize eye pressure and protect the optic nerve through individualized treatment plans tailored to each patient's needs."
      ]
    },
    faqs: [
      { 
        question: "Who is at risk for glaucoma?", 
        answer: (
          <>
            <p className="mb-2">You may be at higher risk if you:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Are over 40 (risk increases with age).</li>
              <li>Have a family history of glaucoma.</li>
              <li>Have high eye pressure, thin corneas, or severe short-sightedness.</li>
              <li>Have diabetes, migraines, or past eye injuries.</li>
            </ul>
          </>
        ) 
      },
      { 
        question: "What are the treatment options?", 
        answer: (
          <>
            <p className="mb-2">The goal is to lower eye pressure to prevent further nerve damage. Treatment is personalized and may include:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Prescription Eye Drops:</strong> The most common first-line treatment to reduce pressure.</li>
              <li><strong>Laser Therapy:</strong> Procedures like Selective Laser Trabeculoplasty (SLT) or YAG Iridotomy can improve drainage and may reduce dependence on drops.</li>
              <li><strong>Surgery:</strong> For cases where drops and laser are insufficient, surgical options create a new drainage pathway.</li>
            </ul>
            <p className="mt-2">Our Glaucoma specialist, Dr. Kartik Parikar will recommend the best approach for you.</p>
          </>
        ) 
      },
      { 
        question: "Do you have a glaucoma specialist?", 
        answer: "Yes. Complex glaucoma management is overseen by our esteemed Glaucoma Specialist, Dr. Kartik Parikar. He reviews complex cases, guides advanced treatment plans, and performs specialist laser or surgical procedures as needed, ensuring you receive expert, sub-specialist care." 
      },
      { 
        question: "How is glaucoma diagnosed and monitored?", 
        answer: (
          <>
            <p className="mb-2">We use a suite of advanced, painless tests to build a comprehensive picture of your eye health:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Tonometry:</strong> Measures your intraocular pressure (IOP).</li>
              <li><strong>OCT (Optical Coherence Tomography):</strong> Scans the optic nerve and retinal nerve fibre layer for thinning.</li>
              <li><strong>Visual Field Test:</strong> Maps your peripheral vision to detect any loss.</li>
              <li><strong>Gonioscopy & Pachymetry:</strong> Examines the eye's drainage angle and measures corneal thickness.</li>
            </ul>
          </>
        ) 
      },
      { 
        question: "What are the symptoms?", 
        answer: (
          <>
            <p className="mb-2">Early to moderate glaucoma usually has no warning signs. This is why regular screening is vital. In advanced stages, you may notice:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Loss of peripheral (side) vision.</li>
              <li>Tunnel vision.</li>
              <li>In acute angle-closure glaucoma (a medical emergency), symptoms include severe eye pain, headache, blurred vision, seeing halos around lights, and nausea.</li>
            </ul>
          </>
        ) 
      },
      { 
        question: "How often will I need check-ups?", 
        answer: "If you are diagnosed with glaucoma or are a high risk suspect, regular monitoring is essential. Initially, check-ups may be every 3-6 months. Once your eye pressure is stable and the condition is controlled, visits may extend to every 6-12 months." 
      },
      { 
        question: "Can glaucoma be cured?", 
        answer: "While any vision loss from glaucoma is permanent, the disease progression can almost always be halted or significantly slowed with early detection and ongoing treatment. Effective management allows most people to retain useful sight for life." 
      }
    ]
  },
  { 
    id: "oculoplastic-clinic",
    title: "Oculoplastic Clinic", 
    desc: "Expert surgical and cosmetic care for eyelids, tear ducts, and surrounding eye areas.",
    detail: {
      image: "/Ocuplastics.png",
      whyChoose: ["Expert care for eyelid, socket, and tear duct concerns.", "Functional and cosmetic solutions tailored to your needs."],
      bestFor: "Those with droopy eyelids, blocked tear ducts, or cosmetic eyelid concerns.",
      howItWorks: [
        "We examine your eyelid position, blink strength, and tear drainage using clinical tests like lid position assessment (measuring eyelid height and symmetry), levator muscle evaluation (checking the muscle that opens your eye), and tear duct syringing to identify blockages. These tests help us diagnose ptosis (drooping eyelids), ectropion (outward turning eyelid), entropion (inward turning eyelid), tear duct obstruction, and other functional problems affecting your vision and eye comfort.",
        
        "Treatment can involve eyelid tightening procedures, ptosis repair to restore normal eyelid position and function, tear duct surgery to clear blockages and restore tear drainage, or cosmetic procedures to address aesthetic concerns. All treatments focus on improving both appearance and function, whether you have difficulty with vision due to heavy lids, tearing due to blocked ducts, or cosmetic concerns that affect your confidence. Our oculoplastic specialists combine surgical expertise with cosmetic artistry to achieve results that look natural while restoring full eyelid function."
      ]
    },
    faqs: [
      { 
        question: "What is oculoplastic surgery?", 
        answer: "Oculoplastic surgery focuses on the eyelids, tear ducts, eye socket, and the area around the eyes. It treats both functional problems (like eyelids that droop and block vision) and cosmetic concerns to improve appearance." 
      },
      { 
        question: "What kind of problems do you treat?", 
        answer: (
          <>
            <p className="mb-2">We treat many common issues, including:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Droopy eyelids that may interfere with sight.</li>
              <li>Eyelids that turn inward or outward, causing irritation.</li>
              <li>Blocked tear ducts that make the eye constantly watery.</li>
              <li>Bags or excess skin around the eyes.</li>
              <li>Eyelid lumps, bumps, or skin cancers.</li>
              <li>Problems with the eye socket after injury or illness.</li>
            </ul>
          </>
        ) 
      },
      { 
        question: "What is recovery like?", 
        answer: (
          <>
            <ul className="list-disc pl-5 space-y-1">
              <li>Some swelling and bruising is normal for the first week.</li>
              <li>You may wear a protective eye patch for a day or two.</li>
              <li>We will give you eye drops to prevent infection.</li>
              <li>You should avoid strenuous activity and heavy lifting for 1-2 weeks.</li>
              <li>Any stitches are usually removed after 7-14 days.</li>
              <li>Follow-up appointments are important to check your healing.</li>
            </ul>
          </>
        ) 
      },
      { 
        question: "Is oculoplastic surgery safe?", 
        answer: "When performed by a qualified specialist, it is very safe. As with any surgery, there are small risks, like temporary swelling, dry eyes, or minor asymmetry." 
      },
      { 
        question: "Will I be asleep during surgery?", 
        answer: "It depends on the procedure. For minor treatments, we simply numb the area with drops and an injection. For more involved surgery, you might have \"twilight sedation\" (where you are very relaxed but not fully asleep) or general anesthesia. Your surgeon will discuss the best option for you." 
      },
      { 
        question: "How long does the surgery take?", 
        answer: "This varies. Minor procedures can take less than an hour in our clinic. More complex surgeries may take a few hours. Most procedures are \"day-case,\" meaning you go home the same day." 
      },
      { 
        question: "How do I prepare for surgery?", 
        answer: (
          <>
            <p className="mb-2">Some suggestions in order to prepare for surgery are:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Arranging for someone to drive you home.</li>
              <li>Stopping certain medications (like blood thinners) as advised.</li>
              <li>Avoiding smoking to help with healing.</li>
              <li>Planning for some time off work to recover.</li>
            </ul>
          </>
        ) 
      },
      { 
        question: "Can children have oculoplastic surgery?", 
        answer: "Yes, when it is medically necessary. Common reasons for children include correcting a drooping eyelid that blocks vision, fixing an eyelid that turns in or out, or removing birthmarks or growths." 
      },
      { 
        question: "Will there be visible scars?", 
        answer: "Our surgeons are experts at hiding scars. Incisions are carefully placed in the natural creases of your eyelids or inside the eye socket where they can't be seen." 
      }
    ]
  },
  { 
    id: "squint-clinic",
    title: "Squint Clinic", 
    desc: "Specialized treatment for eye misalignment to restore straight vision and coordination.",
    detail: {
      image: "/Squint.png",
      whyChoose: ["Comprehensive alignment assessment for accurate diagnosis.", "Both non-surgical and surgical options to restore proper eye coordination."],
      bestFor: "Children or adults with misaligned eyes, double vision, or focusing issues.",
      howItWorks: [
        "We check eye alignment through tests like the cover test (observing how each eye moves when the other is covered), prism measurements (using prisms to measure the deviation), and binocular vision assessment to evaluate how well your eyes work together. We also measure vision in each eye to look for lazy eye, where one eye has reduced vision due to misalignment.",
        
        "Treatment options include glasses or contact lenses to correct refractive errors that may be causing the misalignment, eye exercises and vision therapy to improve eye coordination and focusing abilities, prism lenses to help align the eyes by bending light, and patching therapy (occlusion) for lazy eye, where we cover the stronger eye to force the weaker eye to work harder. In cases where alignment needs correction, eye muscle surgery may be recommended using techniques such as muscle recession (moving the muscle further back to weaken it), muscle resection (shortening the muscle to strengthen it), or transposition surgery for vertical misalignment.",
        
        "For adults, adjustable suture techniques allow fine-tuning of the result after surgery. The goal is straight eyes, better coordination between both eyes, elimination of double vision, and improved binocular vision for better depth perception."
      ]
    },
    faqs: [
      { 
        question: "What causes a squint?", 
        answer: (
          <>
            <p className="mb-2">Causes vary and can include:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>A family history of squints.</li>
              <li>Uncorrected long- or short-sightedness or astigmatism.</li>
              <li>Weakness or imbalance of the eye muscles.</li>
              <li>Certain neurological conditions or, in rare cases, an underlying eye disease.</li>
            </ul>
          </>
        ) 
      },
      { 
        question: "What are the symptoms of a squint?", 
        answer: (
          <>
            <p className="mb-2">The most obvious sign is an eye that appears turned. Other symptoms can include:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Double vision.</li>
              <li>Headaches or eye strain.</li>
              <li>Tilting the head to see better.</li>
              <li>Difficulty with 3D vision or judging depth.</li>
              <li>Closing one eye in bright light.</li>
            </ul>
          </>
        ) 
      },
      { 
        question: "How is a squint diagnosed?", 
        answer: (
          <>
            <p className="mb-2">A specialist will conduct a detailed assessment, which may include:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Measuring the degree of the eye turn.</li>
              <li>A full vision test, often using drops to relax the eye's focus.</li>
              <li>Tests to check how well the eyes work together and for 3D vision.</li>
              <li>Examining the internal health of the eyes.</li>
            </ul>
          </>
        ) 
      },
      { 
        question: "Can a squint be treated?", 
        answer: (
          <>
            <p className="mb-2">Yes, effective treatment is available. The right treatment depends on the type and cause of the squint and may involve one or more of the following:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Glasses</li>
              <li>Vision Therapy</li>
              <li>Prism Lenses</li>
              <li>Botox Injections</li>
              <li>Surgery</li>
            </ul>
          </>
        ) 
      },
      { 
        question: "Is surgery always necessary?", 
        answer: "No. Many cases, especially in children, are managed successfully with glasses, prisms, or vision therapy. Surgery is typically considered when these non-surgical options cannot achieve adequate alignment." 
      },
      { 
        question: "Can adults develop a squint?", 
        answer: "Yes. Conditions like thyroid eye disease, a stroke, head trauma, or other neurological issues can cause an adult-onset squint. Treatment with prisms, Botox®, or surgery is still very effective for adults to manage symptoms and restore alignment." 
      }
    ]
  },
  { 
    id: "myopia-clinic",
    title: "Myopia Clinic", 
    desc: "Advanced care to control and slow down the increasing nearsightedness in children and adolescents.",
    detail: {
      image: "/Myopia.png",
      whyChoose: ["Evidence-based myopia control strategies.", "Regular monitoring to keep track of eye growth and prescription changes."],
      bestFor: "Children with increasing nearsightedness or a family history of high myopia.",
      howItWorks: [
        "We measure your prescription and check true power with cycloplegic drops (special drops that relax the eye's focusing muscle) to get an accurate refractive error measurement. We track eye growth using axial length measurement to see if the eye is elongating (which increases myopia), and perform corneal topography/tomography to map the cornea's shape and help us choose the right treatment approach.",
        
        "Myopia control options include Ortho-K lenses (specially designed rigid lenses worn overnight that reshape the cornea), special soft lenses designed to slow myopia progression, myopia control spectacles, low-dose atropine drops that reduce the eye's elongation, and lifestyle guidance like increased outdoor time (which has been shown to slow myopia progression). These treatments work by altering how light focuses on the retina, encouraging the eye to grow at a slower rate. Regular monitoring through axial length measurements and prescription checks helps us track treatment effectiveness and adjust the approach as needed. These evidence-backed treatments slow the worsening of the prescription number and protect long-term eye health by reducing the risk of high myopia and associated complications like myopic macular degeneration."
      ]
    },
    faqs: [
      { 
        question: "What else can we do to help?", 
        answer: (
          <>
            <p className="mb-2">Lifestyle plays a supporting role. We encourage:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Spending more time outdoors in natural light.</li>
              <li>Taking regular breaks from near work (following the 20-20-20 rule: every 20 minutes, look at something 20 feet away for 20 seconds).</li>
              <li>Ensuring good lighting and posture during reading and screen use.</li>
            </ul>
          </>
        ) 
      },
      { 
        question: "How do I know which treatment is right for my child?", 
        answer: "The best choice for your child depends on their age, prescription, and lifestyle. Our comprehensive consultation will help you make a confident, informed decision by exploring all suitable options." 
      },
      { 
        question: "Is myopia control safe?", 
        answer: "Yes, when prescribed and monitored by an eye care specialist, all these treatments are safe. Regular check-ups are essential to ensure the eyes remain healthy, the treatment is working, and the fit of any lenses is correct." 
      },
      { 
        question: "What are the treatment options for myopia control?", 
        answer: (
          <>
            <p className="mb-2">We offer several proven methods, which can sometimes be combined for the best effect:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Specialist Spectacle Lenses:</strong> Lenses with specific optical designs that help reduce focusing strain and slow eye growth.</li>
              <li><strong>Orthokeratology (Ortho-K):</strong> Custom-designed rigid contact lenses worn overnight to gently reshape the cornea. They provide clear vision during the day without glasses or lenses and are highly effective at slowing progression.</li>
              <li><strong>Atropine Eye Drops:</strong> Very low-dose (typically 0.01%) prescription eye drops used nightly. They are a safe and effective pharmaceutical method to slow eye elongation.</li>
              <li><strong>Soft Multifocal Contact Lenses:</strong> Specific daily disposable soft lenses that provide clear vision and have a built-in myopia control effect.</li>
            </ul>
          </>
        ) 
      },
      { 
        question: "Will my child still need to wear glasses?", 
        answer: "Yes, most likely. Myopia control treatments aim to slow progression, not cure existing short-sightedness. Your child will still need vision correction (glasses or contact lenses) to see clearly in the distance." 
      },
      { 
        question: "Why is controlling myopia progression important?", 
        answer: "Slowing myopia is about long-term eye health. Higher levels of myopia increase the risk of sight-threatening complications later in life." 
      },
      { 
        question: "At what age should myopia control start?", 
        answer: "The earlier, the better. Myopia typically progresses fastest between the ages of 6 and 16." 
      }
    ]
  },
  { 
    id: "retina-diabetic-retinopathy",
    title: "Retina and Diabetic Retinopathy", 
    desc: "Our Retina Clinic focuses on early detection and timely treatment to protect your vision.",
    detail: {
      image: "/Retina and Diabetic retinopathy.png",
      whyChoose: ["Early detection of silent retinal and diabetes-related changes.", "Advanced imaging and timely treatments that protect long-term vision."],
      bestFor: "Diabetic patients, those with family history of retinal disease, or anyone noticing vision changes.",
      howItWorks: [
        "We scan the back of your eye using advanced imaging, including OCT (Optical Coherence Tomography), and fundus photos to detect early changes in the retina that often have no symptoms. These tests help identify peripheral retinal lesions, swelling, leakage, new vessel growth, and blood vessel damage before they affect your vision. Early detection is critical because diabetic retinopathy often progresses silently until regular examination is performed; changes often go undetected.",
        
        "Our clinic checks for every stage of diabetic retinopathy. We can spot early signs, such as small leaks or fluffy deposits in the retina, all the way through to more serious stages where fragile new blood vessels begin to grow where they shouldn't.",
        
        "We monitor for Clinically Significant Macular Oedema (CSME), where the centre of the retina becomes thickened, causing vision deterioration.",
        
        "Treatment options include anti-VEGF injections to stop abnormal blood vessel growth, laser treatment to reduce oxygen demand on the retina, or surgery, depending on the stage. Our focus is on early intervention and close monitoring to prevent vision loss and protect long-term sight in diabetic patients."
      ]
    },
    faqs: [
      { 
        question: "Why are people with diabetes at higher risk for eye problems?", 
        answer: "Consistently high blood sugar and blood pressure levels can gradually damage the delicate retinal blood vessels. The longer you have diabetes and the less controlled it is, the higher the risk." 
      },
      { 
        question: "What are the symptoms?", 
        answer: (
          <>
            <p className="mb-2">In the early stages, there are often no symptoms, which is why regular screening is vital. As it progresses, you may notice:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Blurred or fluctuating vision.</li>
              <li>Dark spots or floaters in your vision.</li>
              <li>Difficulty reading or seeing details.</li>
              <li>Distorted vision where straight lines look wavy.</li>
              <li>A dark or empty area in your central vision.</li>
            </ul>
          </>
        ) 
      },
      { 
        question: "How often should I have a diabetic eye screening?", 
        answer: (
          <>
            <p className="mb-2">We follow national guidelines and recommend:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Type 1 diabetes: Your first screening should be within 5 years of diagnosis, then annually.</li>
              <li>Type 2 diabetes: A screening at the time of diagnosis, then annually.</li>
              <li>During pregnancy: If you have diabetes, you will need a screening in your first trimester and more frequent monitoring as advised.</li>
            </ul>
          </>
        ) 
      },
      { 
        question: "What are the treatment options?", 
        answer: (
          <>
            <p className="mb-2">Treatment depends on the stage and type of retinopathy and is highly effective at preventing vision loss.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Prevention:</strong> Optimal control of diabetes, blood pressure, and cholesterol (HbA1c) is crucial. Early stages often just need regular monitoring.</li>
              <li><strong>Injections:</strong> Anti-VEGF or steroid injections inside the eye reduce swelling and stop new leaky vessels.</li>
              <li><strong>Laser Treatment:</strong> Focal laser seals leaks, while pan-retinal laser shrinks abnormal vessels.</li>
              <li><strong>Surgery:</strong> A vitrectomy removes blood or scar tissue in advanced cases.</li>
            </ul>
          </>
        ) 
      },
      { 
        question: "Do you have a retina specialist?", 
        answer: "Yes. Our retina specialist, Dr Ashish Ahuja, reviews complex retina cases, guides advanced treatment plans, and performs specialist laser or surgical procedures as needed, ensuring you receive expert, sub-specialist care." 
      },
      { 
        question: "How is it diagnosed?", 
        answer: (
          <>
            <p className="mb-2">We use advanced, painless imaging to assess your retinal health in detail:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Dilated Fundus Examination:</strong> Drops widen your pupil for a clear view of the retina.</li>
              <li><strong>Digital Retinal Photography:</strong> High-resolution images to document and monitor changes over time.</li>
              <li><strong>Optical Coherence Tomography (OCT):</strong> A key scan that creates cross-sectional images, precisely measuring retinal thickness and detecting fluid leakage (macular edema).</li>
              <li><strong>Fluorescein Angiography (FA):</strong> In some cases, a special dye is injected to highlight blood flow and pinpoint leaking vessels.</li>
            </ul>
          </>
        ) 
      },
      { 
        question: "Will treatment restore vision I've already lost?", 
        answer: "The primary goal of treatment is to stabilize the condition and prevent further vision loss. Any swelling or bleeding treated may allow vision to improve somewhat, but it may not restore vision fully if significant damage has already occurred. This underscores why regular screening and timely treatment are so important." 
      }
    ]
  },
  { 
    id: "contact-lens-optometry",
    title: "Contact Lens and Optometry Clinic", 
    desc: "Expert contact lens fitting for clear, comfortable vision, including for unique eye conditions.",
    detail: {
      image: "/contact-lens.jpg",
      whyChoose: ["Custom lenses designed for your eye shape and complex eye conditions.", "Custom fitting for soft lenses, toric lenses, rigid gas permeable lenses, hybrid lenses, scleral lenses, and prosthetic or artificial eyes."],
      bestFor: "Anyone wanting contact lenses, including those with dry eyes or irregular corneas.",
      howItWorks: [
        "We measure your cornea's shape using corneal topography, check your tear film quality and quantity, and conduct a thorough examination of your eye's surface to determine your suitability for contact lenses. We try different lenses systematically to find the best fit, balance, and optical correction for your specific needs. We also teach you how to wear and care for lenses safely, including insertion, removal, and hygiene practices to prevent infections.",
        
        "Treatment involves selecting the right lens type such as soft lenses (most common, comfortable, and available in daily, weekly, or monthly options), rigid gas permeable (RGP) lenses (more durable, excellent for astigmatism and complex prescriptions), scleral lenses (large lenses that rest on the white of the eye, ideal for keratoconus or severe dry eye), hybrid lenses (combining soft and rigid materials for comfort and clarity), or specialized lenses for astigmatism (toric) or presbyopia (multifocal).",
        
        "Follow-up visits help ensure comfort, clarity, and eye health, with regular monitoring to detect any complications like hypoxia (oxygen deprivation), infection, or protein buildup. Our expert fitting combines precision measurement with personalized service to achieve excellent vision and comfort for all types of vision needs and eye conditions."
      ]
    },
    faqs: [
      { 
        question: "What types of contact lenses do you offer?", 
        answer: (
          <>
            <p className="mb-2">We provide a full range to suit different needs and lifestyles:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Soft Daily & Monthly Lenses:</strong> For routine correction of short/long sightedness and astigmatism.</li>
              <li><strong>Rigid Gas Permeable (RGP) Lenses:</strong> For higher prescriptions or irregular corneas (e.g., keratoconus), offering crisp optics.</li>
              <li><strong>Specialist Lenses:</strong> Including scleral lenses for dry eyes or irregular corneas, and orthokeratology (Ortho-K) lenses for overnight myopia control.</li>
              <li><strong>Multifocal & Toric Lenses:</strong> For presbyopia and astigmatism.</li>
            </ul>
          </>
        ) 
      },
      { 
        question: "What does a contact lens fitting involve?", 
        answer: (
          <>
            <p className="mb-2">A fitting is more than just a prescription. It includes:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>A comprehensive eye health check.</li>
              <li>Precise measurements of your corneal curvature and pupil size.</li>
              <li>Assessment of your tear film.</li>
              <li>Trial lenses to evaluate comfort, fit, and vision quality.</li>
              <li>Full instruction on safe insertion, removal, and lens care.</li>
            </ul>
          </>
        ) 
      },
      { 
        question: "How do I care for my contact lenses?", 
        answer: (
          <>
            <p className="mb-2">Proper care is essential for eye health:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Always wash and dry your hands before handling lenses.</li>
              <li>Only use the recommended disinfecting solution—never water or saliva.</li>
              <li>Rub and rinse your lenses (if reusable) as directed.</li>
              <li>Replace your lens case monthly and never re-use the old solution.</li>
              <li>Never sleep in your lenses unless they are specifically approved for overnight wear.</li>
            </ul>
          </>
        ) 
      },
      { 
        question: "Can I wear contact lenses if I have dry eyes or astigmatism?", 
        answer: "Yes. For dry eyes, we may recommend specific lens materials, daily disposables, or moisture-retaining scleral lenses. For astigmatism, we use precisely designed toric lenses. We will advise on the best option for your specific needs." 
      },
      { 
        question: "Who is a good candidate for contact lenses?", 
        answer: "The best option for your child is personalised, based on their specific needs. During a comprehensive consultation, we will discuss all suitable treatments to help you make a confident, informed decision." 
      },
      { 
        question: "What are the advantages over glasses?", 
        answer: "Contacts provide a more natural field of vision without frames, are great for sports and active lifestyles, don't fog up or get wet in the rain, and can correct certain vision problems (like irregular corneas) more effectively than glasses." 
      },
      { 
        question: "What is Orthokeratology?", 
        answer: "Ortho-K involves wearing rigid, custom-designed lenses overnight to gently reshape the cornea. You remove them in the morning and enjoy clear vision all day without glasses or lenses. It is particularly popular for myopia control in children, as it can slow the progression of short-sightedness." 
      }
    ]
  }
];


// ==========================================
// 1. HERO SECTION COMPONENT 
// ==========================================
const ServicesHero = () => {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] lg:h-[550px] flex items-center mt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover"
        style={{ 
          backgroundImage: "url('/Services-main.JPG')",
          backgroundPosition: "center 75%"
        }} 
      ></div>

      {/* Text Content - Solid Blue Box */}
      <div className="relative z-10 bg-[#1b2a4e] w-[80%] md:w-auto max-w-xl p-5 md:p-8 lg:p-10 ml-4 md:ml-12 lg:ml-24 mt-32 md:mt-40 lg:mt-48 shadow-2xl">
        <h1 className="text-white text-3xl md:text-5xl font-['Lora'] font-bold tracking-wide text-center md:text-left leading-tight">
          Comprehensive Eye Care Services
        </h1>
      </div>

      {/* The SVG Wave Divider (Fills to White) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 120" 
          className="w-full h-[50px] md:h-[100px] lg:h-[120px]" 
          preserveAspectRatio="none"
        >
          <path 
            className="fill-white" 
            d="M0,64L80,69.3C160,75,320,85,480,74.7C640,64,800,32,960,26.7C1120,21,1280,43,1360,53.3L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

// ==========================================
// 2. SERVICE DETAIL EXPANDED COMPONENT
// ==========================================
const ServiceDetailView = ({ service, onBookClick }) => {
  // State to track if the "How it Works" section is expanded
  const [isExpanded, setIsExpanded] = useState(false);

  // Reset the expand state automatically whenever you click a different service!
  useEffect(() => {
    setIsExpanded(false);
  }, [service]);

  if (!service) return null;

  // Determine if our howItWorks data is an array (multi-paragraph) or a simple string
  const howItWorksData = service.detail.howItWorks;
  const isArray = Array.isArray(howItWorksData);
  const hasMoreText = isArray && howItWorksData.length > 1;

  return (
    <div className="pt-20 mt-12 animate-fade-in-up">
      
      {/* 1. Main Container: Dark Border, Rounded Corners, Inner Padding */}
      <div className="bg-white rounded-[2rem] border border-gray-800 p-6 md:py-10 md:px-12">
        
        {/* Top Section: Image (Left) & Content (Right) */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Left Side: Image with rounded corners and gap from border */}
          <div className="lg:w-[35%] flex-shrink-0">
            <img 
              src={service.detail.image} 
              alt={service.title} 
              className="w-full h-[300px] lg:h-[450px] object-cover rounded-[1.5rem] shadow-2xl"
            />
          </div>

          {/* Right Side: Content */}
          <div className="lg:w-[65%] flex flex-col justify-start pt-2 max-w-[600px]">
            
            {/* Title Pill Badge */}
            <div className="self-start inline-block bg-[#cce5d6] text-[#11224A] px-5 py-2 rounded-full text-[16px] font-normal mb-6">
              {service.title}
            </div>
            
            {/* Description */}
            <p className="text-gray-700 mb-8 text-base">
              {service.desc}
            </p>

            {/* Why Choose This Service */}
            <div className="mb-8 border-l-4 border-[#9cccae] pl-5">
              <h4 className="font-serif font-medium text-[#1b2a4e] text-lg mb-4">Why Choose This Service:</h4>

              <ul className="flex flex-col gap-4">
                {service.detail.whyChoose.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    
                    {/* Bullet: outer ring + inner filled dot */}
                    <div className="flex items-center justify-center w-5 h-5 rounded-full border-[#2c7a51] bg-[#A8D5BA] shrink-0 mt-[2px]">
                      <div className="w-2 h-2 rounded-full bg-[#11224A]"></div>
                    </div>

                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Best For Box (Yellow Background) */}
            <div className="bg-[#F8E0A2] rounded-[1rem] p-6 mb-2">
              <h4 className="font-serif font-normal text-[#1b2a4e] mb-2">Best For:</h4>
              <p className="text-gray-800 text-sm leading-relaxed">{service.detail.bestFor}</p>
            </div>
          </div>
        </div>

        {/* Bottom Section: How it Works (Dynamic Expandable Version) */}
        <div className="mt-10 bg-gray-50 rounded-[1rem] p-6 md:p-8">
          <h4 className="font-serif font-bold text-[#1b2a4e] mb-3">How It Works:</h4>
          
          <div className="text-gray-600 text-sm leading-relaxed">
            {isArray ? (
              <div className="space-y-4">
                {/* Always show the first paragraph */}
                <p>
                  {howItWorksData[0]}
                  {!isExpanded && hasMoreText && (
                    <span 
                      onClick={() => setIsExpanded(true)} 
                      className="text-[#f17a6c] cursor-pointer hover:underline ml-2 whitespace-nowrap font-medium"
                    >
                      Read more...
                    </span>
                  )}
                </p>

                {/* Show the remaining paragraphs only if expanded */}
                <div 
                  className={`grid transition-all duration-500 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden space-y-4">
                    {howItWorksData.slice(1).map((paragraph, index) => (
                      <p key={index} className={index === 0 ? "pt-4" : ""}>
                        {paragraph}
                      </p>
                    ))}
                    
                    {/* Show less button at the very bottom */}
                    {isExpanded && (
                      <span 
                        onClick={() => setIsExpanded(false)} 
                        className="text-[#f17a6c] cursor-pointer hover:underline inline-block mt-2 font-medium"
                      >
                        Show less
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              /* Fallback for services that still just have a simple string */
              <p>{howItWorksData}</p>
            )}
          </div>
        </div>

      </div>

      {/* 2. Button OUTSIDE the main bordered box */}
      <div className="mt-8">
        <button onClick={onBookClick} className="cursor-pointer bg-[#b4dfc4] text-[#1b2a4e] font-medium px-8 py-3.5 rounded-full hover:bg-[#9cccae] transition-all duration-300 flex items-center font-normal text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
          Book Consultation
        </button>
      </div>
      
    </div>
  );
};


// ==========================================
// 3. SERVICES GRID COMPONENT
// ==========================================
const ServicesGrid = ({ activeServiceId, onSelectService, onBookClick }) => {
  const detailRef = useRef(null);

// Auto-scroll to details when a service is selected (with Navbar offset)
  useEffect(() => {
    if (activeServiceId && detailRef.current) {
      // 1. Get the exact Y position of the detail box on the page
      const elementPosition = detailRef.current.getBoundingClientRect().top + window.scrollY;
      
      // 2. Subtract the Navbar height (approx 80px) + an extra 20px gap so it looks nice
      const offsetPosition = elementPosition - 100;

      // 3. Tell the window to scroll to that exact calculated pixel
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, [activeServiceId]);

  const activeServiceData = servicesData.find(s => s.id === activeServiceId);

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service) => (
            <div 
              key={service.id} 
              onClick={() => onSelectService(service.id)}
              className={`bg-white rounded-xl shadow-sm p-8 border flex flex-col h-full cursor-pointer transition-all duration-300 ${
                activeServiceId === service.id 
                  ? 'border-[#1b2a4e] ring-1 ring-[#1b2a4e] shadow-md' 
                  : 'border-gray-100 hover:shadow-lg hover:border-gray-200'
              }`}
            >
              <h3 className="text-[#1b2a4e] font-serif text-xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                {service.desc}
              </p>
              <div className="flex items-center text-sm font-medium text-[#1b2a4e] mt-auto group">
                Learn More 
                <svg className={`w-4 h-4 ml-1 transition-transform ${activeServiceId === service.id ? 'translate-x-1' : 'group-hover:translate-x-1'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* The Expanded Detail Box Container */}
        <div ref={detailRef}>
          <ServiceDetailView service={activeServiceData} onBookClick={onBookClick} />
        </div>

      </div>
    </section>
  );
};


// ==========================================
// 3.5 CALL TO ACTION (CTA) COMPONENT
// ==========================================
const ServicesCTA = ({ onBookClick }) => {
  return (
    // Standard padding here for the CTA
    <section className="bg-[#1b2a4e] py-20 md:py-28 px-4 text-center w-full">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-[#e2d5ad] text-3xl md:text-4xl font-serif mb-4">
          Ready to Start Your Vision Journey?
        </h2>
        <p className="text-gray-300 mb-10 text-base leading-relaxed max-w-2xl mx-auto">
          Book a consultation with our specialists to discover which treatment is right
          for you. We're here to guide you every step of the way.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button onClick={onBookClick} className="cursor-pointer bg-[#a8dcb6] text-[#1b2a4e] px-8 py-3 rounded-full text-sm font-semibold hover:bg-[#92ccA2] transition-colors w-full sm:w-auto">
            Book Consultation
          </button>
          <Link to="/contact" className="cursor-pointer bg-transparent border border-white text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-white/10 transition-colors w-full sm:w-auto">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 4. FAQ COMPONENT (Dynamic)
// ==========================================
const ServicesFAQ = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    // w-full makes it span the whole page
    // mt-16 md:mt-24 creates the white gap above it!
    <section className="bg-[#1b2a4e] w-full mt-16 md:mt-24 py-16 md:py-24 px-4">
      {/* Inner container stays max-width so the text aligns nicely */}
      <div className="max-w-[1450px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          <div className="lg:col-span-4 text-white">
            <h2 className="text-[#e2d5ad] text-3xl md:text-4xl font-serif mb-4">
              Frequently asked<br />Questions
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              Quick answers to common concerns about eye procedures, safety, and recovery.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-white/20 pb-4">
                  <button 
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center text-left text-white focus:outline-none"
                  >
                    <span className="text-base md:text-lg pr-4">{faq.question}</span>
                    <svg 
                      className={`w-5 h-5 text-white transition-transform duration-300 shrink-0 ${openIndex === index ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                    <div className="text-gray-300 text-sm mt-4 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// ==========================================
// 5. MAIN PAGE COMPONENT (State Manager)
// ==========================================
export default function ServicesPage({ onBookClick }) {
  const [activeServiceId, setActiveServiceId] = useState(null);
  const location = useLocation(); // <--- 1. Get the current route location

  // <--- 2. Add this useEffect to listen for incoming state --->
  useEffect(() => {
    // If the user clicked a link in the footer that passed an activeId, set it!
    if (location.state && location.state.activeId) {
      setActiveServiceId(location.state.activeId);
      
      // Optional: Clear the state so it doesn't get stuck if they refresh
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  const activeServiceData = servicesData.find(s => s.id === activeServiceId);
  const faqsToDisplay = activeServiceData ? activeServiceData.faqs : defaultFAQs;

  return (
    <main className="w-full">
      <ServicesHero />
      <ServicesGrid 
        activeServiceId={activeServiceId} 
        onSelectService={setActiveServiceId} 
        onBookClick={onBookClick}
      />
      
      {/* Conditionally render the CTA ONLY if no service is selected */}
      {!activeServiceId && <ServicesCTA onBookClick={onBookClick} />}
      
      <ServicesFAQ faqs={faqsToDisplay} />
    </main>
  );
}
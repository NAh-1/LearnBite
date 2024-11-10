// Enhanced chapter database with more detailed content
const chaptersDatabase = {
    science: [
        {
            title: 'Structure of Atom',
            content: `

<h2 class="text-3xl font-bold mb-4">Basic Structure of the Atom</h2>

<h3 class="text-2xl font-bold mb-3">Fundamental Particles</h3>

<ol class="list-decimal pl-6 mb-6">
    <li class="mb-2">
        <strong>Proton</strong> (p+)
        <ul class="list-disc pl-6 mt-2">
            <li>Located in nucleus</li>
            <li>Positive charge</li>
        </ul>
    </li>
    <li class="mb-2">
        <strong>Electron</strong> (e-)
        <ul class="list-disc pl-6 mt-2">
            <li>Revolves around nucleus in orbits/shells</li>
            <li>Negative charge</li>
        </ul>
    </li>
    <li class="mb-2">
        <strong>Neutron</strong> (n)
        <ul class="list-disc pl-6 mt-2">
            <li>Located in nucleus</li>
            <li>Neutral charge</li>
        </ul>
    </li>
</ol>

<h3 class="text-2xl font-bold mb-3">Important Numbers</h3>

<h4 class="text-xl font-bold mb-2">Atomic Number (Z)</h4>
<ul class="list-disc pl-6 mb-4">
    <li>Number of protons in nucleus</li>
    <li>Z = number of protons = number of electrons</li>
    <li>Represented as subscript on left side of element symbol</li>
</ul>

<h4 class="text-xl font-bold mb-2">Mass Number (A)</h4>
<ul class="list-disc pl-6 mb-6">
    <li>Sum of protons and neutrons</li>
    <li>A = number of protons + number of neutrons</li>
    <li>A = Z + number of neutrons</li>
    <li>Represented as superscript on left side of element symbol</li>
</ul>

<h2 class="text-3xl font-bold mb-4">Bohr's Model of Atom (1913)</h2>

<h3 class="text-2xl font-bold mb-3">Shell Structure</h3>
<ul class="list-disc pl-6 mb-4">
    <li>Electrons revolve in fixed orbits called shells/energy levels</li>
    <li>Shells labeled as K, L, M, N... (from innermost)</li>
    <li>Each shell has fixed energy</li>
    <li>Energy increases as distance from nucleus increases (K < L < M < N)</li>
</ul>

<h3 class="text-2xl font-bold mb-3">Shell Capacity</h3>
<p class="mb-4">Maximum electrons per shell = 2n²</p>
<ul class="list-disc pl-6 mb-4">
    <li>K shell (n=1): 2 electrons</li>
    <li>L shell (n=2): 8 electrons</li>
    <li>M shell (n=3): 18 electrons</li>
    <li>N shell (n=4): 32 electrons</li>
</ul>

<h3 class="text-2xl font-bold mb-3">Important Rules</h3>
<ol class="list-decimal pl-6 mb-4">
    <li class="mb-2">Maximum 8 electrons in outermost shell</li>
    <li class="mb-2">Inner shells must be filled before outer shells</li>
    <li class="mb-2">Electrons maintain constant energy in fixed orbit</li>
</ol>

<h3 class="text-2xl font-bold mb-3">Electron Behavior</h3>
<ul class="list-disc pl-6 mb-4">
    <li><strong>Energy Absorption</strong>: Electron jumps to higher shell → excited state</li>
    <li><strong>Energy Emission</strong>: Electron drops to lower shell → ground state</li>
</ul>

<h2 class="text-3xl font-bold mb-4">Valency</h2>

<h3 class="text-2xl font-bold mb-3">Key Concepts</h3>
<ul class="list-disc pl-6 mb-4">
    <li><strong>Valence Shell</strong>: Outermost shell of atom</li>
    <li><strong>Valence Electrons</strong>: Electrons in outermost shell</li>
    <li><strong>Valency</strong>: Combining capacity of element (electrons gained/lost/shared)</li>
</ul>

<h3 class="text-2xl font-bold mb-3">Valency Rules</h3>
<ol class="list-decimal pl-6 mb-4">
    <li class="mb-2">For 1-3 valence electrons: Valency = number of valence electrons</li>
    <li class="mb-2">For 4-7 valence electrons: Valency = 8 - number of valence electrons</li>
    <li class="mb-2">Noble gases: Valency = 0</li>
</ol>

<h2 class="text-3xl font-bold mb-4">Isotopes and Isobars</h2>

<h3 class="text-2xl font-bold mb-3">Isotopes</h3>
<ul class="list-disc pl-6 mb-4">
    <li>Same element, different mass numbers</li>
    <li>Same atomic number, different neutron count</li>
    <li>Same chemical properties, different physical properties</li>
    <li>Same number of valence electrons</li>
</ul>

<h4 class="text-xl font-bold mb-2">Applications</h4>
<ul class="list-disc pl-6 mb-4">
    <li>Uranium isotopes: Nuclear reactor fuel</li>
    <li>Cobalt isotopes: Cancer treatment</li>
    <li>Iodine isotopes: Goiter treatment</li>
</ul>

<h3 class="text-2xl font-bold mb-3">Isobars</h3>
<ul class="list-disc pl-6 mb-4">
    <li>Different elements with same mass number</li>
    <li>Different atomic numbers</li>
    <li>Different chemical and physical properties</li>
    <li>Different number of protons, electrons, and neutrons</li>
</ul>

<h2 class="text-3xl font-bold mb-4">Atomic Mass Calculations</h2>

<h3 class="text-2xl font-bold mb-3">Average Atomic Mass Formula</h3>
<p class="mb-4">For isotopes with different abundances:</p>
<pre class="bg-gray-800 text-white p-4 rounded-lg mb-4 overflow-x-auto">
<code>
Average Mass = (Mass₁ × Abundance₁%) + (Mass₂ × Abundance₂%)
                              100
</code>
</pre>

<h4 class="text-xl font-bold mb-2">Example: Chlorine isotopes</h4>
<ul class="list-disc pl-6 mb-4">
    <li>³⁵Cl (75%) and ³⁷Cl (25%)</li>
    <li>Average mass = (35 × 75 + 37 × 25) ÷ 100 = 35.5 u</li>
</ul>
            `,
            subject: 'Science',
            difficulty: 'Intermediate',
            relatedChapters: ['Matter in Our Surroundings', 'Chemical Bonding']
        },

        {
            title: 'Matter in Our Surroundings',
            content: `

<h3 class="text-2xl font-bold mb-4">Introduction to Matter</h3>
<ul class="list-disc pl-6 mb-6">
    <li class="mb-2">Matter is anything that has mass and occupies space</li>
    <li class="mb-2">All things around us, including our own bodies, are made of matter</li>
</ul>
<h3 class="text-2xl font-bold mb-4">States of Matter</h3>
<h4 class="text-xl font-bold mb-4">Solid</h4>
<ul class="list-disc pl-6 mb-6">
    <li class="mb-2">Fixed shape and volume</li>
    <li class="mb-2">Particles are closely packed and have low kinetic energy</li>
    <li class="mb-2">Examples: ice, wood, metal</li>
</ul>
<h4 class="text-xl font-bold mb-4">Liquid</h4>
<ul class="list-disc pl-6 mb-6">
    <li class="mb-2">Fixed volume but variable shape</li>
    <li class="mb-2">Particles have moderate kinetic energy, can flow and take the shape of container</li>
    <li class="mb-2">Examples: water, milk, gasoline</li>
</ul>
<h4 class="text-xl font-bold mb-4">Gas</h4>
<ul class="list-disc pl-6 mb-6">
    <li class="mb-2">No fixed shape or volume</li>
    <li class="mb-2">Particles have high kinetic energy, spread out and fill the entire container</li>
    <li class="mb-2">Examples: air, oxygen, carbon dioxide</li>
</ul>
<h3 class="text-2xl font-bold mb-4">Properties of Matter</h3>
<h4 class="text-xl font-bold mb-4">Physical Properties</h4>
<ul class="list-disc pl-6 mb-6">
    <li class="mb-2">Observable characteristics of matter</li>
    <li class="mb-2">Examples: color, smell, boiling point, melting point</li>
</ul>
<h4 class="text-xl font-bold mb-4">Chemical Properties</h4>
<ul class="list-disc pl-6 mb-6">
    <li class="mb-2">Characteristics related to a substance's chemical composition and reactions</li>
    <li class="mb-2">Examples: flammability, reactivity, pH</li>
</ul>
<h3 class="text-2xl font-bold mb-4">Changes in Matter</h3>
<h4 class="text-xl font-bold mb-4">Physical Change</h4>
<ul class="list-disc pl-6 mb-6">
    <li class="mb-2">Matter changes in physical form but its chemical composition remains the same</li>
    <li class="mb-2">Examples: melting ice, boiling water, tearing paper</li>
</ul>
<h4 class="text-xl font-bold mb-4">Chemical Change</h4>
<ul class="list-disc pl-6 mb-6">
    <li class="mb-2">Matter undergoes a chemical reaction, resulting in the formation of new substances</li>
    <li class="mb-2">Examples: burning wood, rusting of iron, photosynthesis</li>
</ul>
<h3 class="text-2xl font-bold mb-4">Mixtures and Pure Substances</h3>
<h4 class="text-xl font-bold mb-4">Pure Substances</h4>
<ul class="list-disc pl-6 mb-6">
    <li class="mb-2">Made up of only one type of particle (atom or molecule)</li>
    <li class="mb-2">Examples: gold, silver, water, carbon dioxide</li>
</ul>
<h4 class="text-xl font-bold mb-4">Mixtures</h4>
<ul class="list-disc pl-6 mb-6">
    <li class="mb-2">Composed of two or more pure substances</li>
    <li class="mb-2">Examples: air, seawater, alloys</li>
</ul>
<h4 class="text-xl font-bold mb-4">Separation of Mixtures</h4>
<ul class="list-disc pl-6 mb-6">
    <li class="mb-2">Techniques like filtration, distillation, chromatography can be used to separate the components of a mixture</li>
</ul>
<h3 class="text-2xl font-bold mb-4">States of Matter and Particle Movement</h3>
<ul class="list-disc pl-6 mb-6">
    <li class="mb-2">Solid: Particles vibrate in fixed positions</li>
    <li class="mb-2">Liquid: Particles slide past each other, can flow</li>
    <li class="mb-2">Gas: Particles move rapidly in all directions, spread out to fill container</li>
</ul>
<h3 class="text-2xl font-bold mb-4">Applications and Examples</h3>
<ul class="list-disc pl-6 mb-6">
    <li class="mb-2">Solid, liquid, and gas states are observed in our everyday life</li>
    <li class="mb-2">Understanding states of matter is important for many scientific and technological applications</li>
    <li class="mb-2">Examples: water cycle, combustion, refrigeration, gas laws</li>
</ul>
            `,
            subject: 'Science',
            difficulty: 'Intermediate',
            relatedChapters: ['Structure of Atom', 'Chemical Bonding']
        },
        {
            "title": "Motion",
            "content": `
                <h2 class="text-3xl font-bold mb-4">Introduction to Motion</h2>
                <p class="mb-4">Motion refers to the change in position of an object over time. Understanding motion is fundamental in physics as it helps us analyze how objects move, why they move, and predict future movement based on given conditions. Motion is described using measurable quantities such as distance, displacement, speed, velocity, and acceleration.</p>
                
                <h3 class="text-2xl font-bold mb-3">Types of Motion</h3>
                <p class="mb-4">There are different kinds of motion depending on the path followed and the type of movement:</p>
                <ul class="list-disc pl-6 mb-6">
                    <li class="mb-2"><strong>Translational Motion:</strong> When an object moves along a straight or curved path. Examples include cars moving on a road, or a ball rolling down a hill.</li>
                    <li class="mb-2"><strong>Rotational Motion:</strong> When an object spins or rotates around a fixed axis, like the rotation of Earth around its axis, or a spinning top.</li>
                    <li class="mb-2"><strong>Oscillatory Motion:</strong> Repetitive back-and-forth motion around a central point, such as a pendulum swinging or the vibrations of a tuning fork.</li>
                </ul>
                
                <h3 class="text-2xl font-bold mb-3">Distance and Displacement</h3>
                <p class="mb-4"><strong>Distance</strong> is the total length of the path an object travels, regardless of direction. It is a scalar quantity, meaning it only has magnitude (size) but no direction.</p>
                <p class="mb-4"><strong>Displacement</strong> is the shortest straight-line distance between an object's starting and ending points, taking direction into account. Displacement is a vector quantity, meaning it has both magnitude and direction.</p>
                <p class="mb-4"><strong>Example:</strong> If you walk 3 km east, then 4 km north, the total distance you traveled is 7 km. However, the displacement is only 5 km northeast (the straight-line distance from your starting to ending point).</p>
        
                <h3 class="text-2xl font-bold mb-3">Speed and Velocity</h3>
                <p class="mb-4"><strong>Speed</strong> is the rate at which an object covers distance. It is a scalar quantity, so it only considers how fast an object moves, not the direction.</p>
                <ul class="list-disc pl-6 mb-4">
                    <li>Formula: <span>Speed = Distance / Time</span></li>
                    <li>Units: Meters per second (m/s) or kilometers per hour (km/h)</li>
                    <li><strong>Example:</strong> A car traveling 120 km in 2 hours has an average speed of 60 km/h.</li>
                </ul>
                
                <p class="mb-4"><strong>Velocity</strong> is the rate at which an object changes its position. It is a vector quantity, meaning it considers both the speed and the direction of motion.</p>
                <ul class="list-disc pl-6 mb-4">
                    <li>Formula: <span>Velocity = Displacement / Time</span></li>
                    <li>Units: Meters per second (m/s)</li>
                    <li><strong>Example:</strong> A car moving 60 km east in 2 hours has a velocity of 30 km/h east.</li>
                </ul>
                
                <h3 class="text-2xl font-bold mb-3">Acceleration</h3>
                <p class="mb-4"><strong>Acceleration</strong> is the rate at which an object's velocity changes over time. It is a vector quantity, indicating that it considers the direction of change in velocity.</p>
                <ul class="list-disc pl-6 mb-4">
                    <li>Formula: <span>Acceleration = Change in Velocity / Time</span> or <span>a = (v - u) / t</span> where <span>v</span> is final velocity, <span>u</span> is initial velocity, and <span>t</span> is time taken.</li>
                    <li>Units: Meters per second squared (m/s²)</li>
                    <li><strong>Example:</strong> If a car speeds up from 0 to 20 m/s in 4 seconds, its acceleration is 5 m/s².</li>
                </ul>
        
                <h3 class="text-2xl font-bold mb-3">Uniform and Non-uniform Motion</h3>
                <p class="mb-4"><strong>Uniform Motion:</strong> An object is in uniform motion if it covers equal distances in equal intervals of time. For example, a car moving at a constant speed of 60 km/h on a straight road.</p>
                <p class="mb-4"><strong>Non-uniform Motion:</strong> When an object covers unequal distances in equal intervals of time. This occurs when the object’s speed varies, such as a car accelerating or decelerating on a busy road.</p>
        
                <h3 class="text-2xl font-bold mb-3">Equations of Motion</h3>
                <p class="mb-4">The three equations of motion relate initial velocity (u), final velocity (v), acceleration (a), time (t), and displacement (s) for an object moving with constant acceleration:</p>
                <ol class="list-decimal pl-6 mb-4">
                    <li>Final velocity: <span>v = u + at</span></li>
                    <li>Displacement: <span>s = ut + ½ at²</span></li>
                    <li>Velocity-Displacement relationship: <span>v² = u² + 2as</span></li>
                </ol>
                <p class="mb-4"><strong>Example Problem:</strong> A car accelerates from rest at 5 m/s² for 10 seconds. Calculate its final velocity and the distance it covers.</p>
                <ul class="list-disc pl-6 mb-4">
                    <li>Using <span>v = u + at</span>: <span>v = 0 + (5 × 10) = 50 m/s</span></li>
                    <li>Using <span>s = ut + ½ at²</span>: <span>s = 0 × 10 + ½ × 5 × (10)² = 250 m</span></li>
                </ul>
        
                <h3 class="text-2xl font-bold mb-3">Graphical Representation of Motion</h3>
                <ul class="list-disc pl-6 mb-6">
                    <li><strong>Distance-Time Graph:</strong> Shows how distance changes with time. A straight line represents uniform motion, while a curve represents non-uniform motion.</li>
                    <li><strong>Velocity-Time Graph:</strong> Shows how velocity changes with time. The slope of the line represents acceleration, and the area under the curve gives displacement.</li>
                    <li><strong>Acceleration-Time Graph:</strong> Shows how acceleration varies over time. A horizontal line indicates constant acceleration.</li>
                </ul>
        
                <h3 class="text-2xl font-bold mb-3">Circular Motion</h3>
                <p class="mb-4">Circular motion is the motion of an object along the circumference of a circle. Even if the speed remains constant, the object is accelerating because the direction changes continuously.</p>
                <ul class="list-disc pl-6 mb-4">
                    <li><strong>Formula for Uniform Circular Motion:</strong> <span>v = rω</span>, where <span>v</span> is linear velocity, <span>r</span> is the radius, and <span>ω</span> is angular velocity.</li>
                    <li><strong>Example:</strong> The motion of the Earth around the Sun or a car taking a circular turn.</li>
                </ul>
        
                <h2 class="text-3xl font-bold mb-4">Key Concepts and Applications</h2>
                <ul class="list-disc pl-6 mb-4">
                    <li>Understanding motion helps analyze real-world problems in physics and engineering, such as predicting the movement of vehicles, satellites, or athletes.</li>
                    <li>Equations of motion and graphical representations are used in science and technology fields, including mechanics, aviation, and space exploration.</li>
                </ul>
            `,
            "subject": "Science",
            "difficulty": "Intermediate",
            "relatedChapters": ["Force and Newton's Laws of Motion", "Gravitation"]
        },
        {
            title: 'Force and Newtons Laws of Motion',
            content: `
            <h2 class="text-3xl font-bold mb-4">Force and Newton's Laws of Motion</h2>

<h3 class="text-2xl font-bold mb-4">Understanding Force</h3>
<p class="mb-4"><strong>Force:</strong> A push or pull that can cause an object to start moving, stop moving, or change its direction. Force is a vector quantity, which means it has both magnitude and direction.</p>

<div class="mb-6">
    <img src="https://online-learning-college.com/wp-content/uploads/2022/06/Forces-and-movement.jpg" alt="Forces acting on objects" class="rounded-lg shadow-md mb-2" width="
    400">
    <figcaption class="text-center text-gray-600 text-sm">Figure 1: Different types of forces acting on objects in daily life</figcaption>
</div>

<h4 class="text-xl font-bold mb-2">Types of Forces:</h4>

<div class="mb-6">
    <h5 class="font-bold mb-2">1. Contact Forces:</h5>
    <ul class="list-disc pl-6 mb-4">
        <li class="mb-2"><strong>Muscular force:</strong> Force exerted by muscles of human body or animals (e.g., lifting a book, pushing a cart)</li>
        <li class="mb-2"><strong>Friction force:</strong> Force that opposes relative motion between surfaces in contact
            <ul class="list-disc pl-6 mt-2">
                <li>Static friction: Acts between stationary surfaces</li>
                <li>Kinetic friction: Acts between moving surfaces</li>
                <li>Rolling friction: Acts on rolling objects</li>
            </ul>
        </li>
        <li class="mb-2"><strong>Normal force:</strong> Perpendicular force exerted by a surface on an object resting on it</li>
        <li class="mb-2"><strong>Air resistance:</strong> Force exerted by air on moving objects, opposing their motion</li>
    </ul>
    <img src="https://year4stvincents.weebly.com/uploads/2/1/3/7/21377346/screen-shot-2021-06-25-at-1-07-53-pm_orig.png" alt="Contact forces diagram" class="rounded-lg shadow-md mb-2" width="
    400">
    <figcaption class="text-center text-gray-600 text-sm">Figure 2: Examples of contact forces in everyday situations</figcaption>
</div>

<div class="mb-6">
    <h5 class="font-bold mb-2">2. Non-Contact Forces:</h5>
    <ul class="list-disc pl-6 mb-4">
        <li class="mb-2"><strong>Gravitational force:</strong> Attractive force between any two objects due to their masses
            <ul class="list-disc pl-6 mt-2">
                <li>Force that keeps planets in orbit</li>
                <li>Causes objects to fall towards Earth</li>
                <li>Proportional to masses and inversely proportional to square of distance</li>
            </ul>
        </li>
        <li class="mb-2"><strong>Magnetic force:</strong> Force exerted by magnets or moving charges
            <ul class="list-disc pl-6 mt-2">
                <li>Attracts ferromagnetic materials</li>
                <li>Has both attractive and repulsive nature</li>
            </ul>
        </li>
        <li class="mb-2"><strong>Electrostatic force:</strong> Force between electrically charged objects
            <ul class="list-disc pl-6 mt-2">
                <li>Like charges repel</li>
                <li>Unlike charges attract</li>
            </ul>
        </li>
    </ul>
    <img src="https://media.quizizz.com/_mdserver/main/media/resource/gs/quizizz-media/quizzes/f9a60bc8-20f4-4544-a073-21664c8b050a-v2" alt="Non-contact forces diagram" class="rounded-lg shadow-md mb-2" width="400">
    <figcaption class="text-center text-gray-600 text-sm">Figure 3: Illustration of non-contact forces</figcaption>
</div>

<h3 class="text-2xl font-bold mb-4">Effects of Force</h3>
<ul class="list-disc pl-6 mb-6">
    <li class="mb-2"><strong>Change in state of motion:</strong> Can make a stationary object move or stop a moving object</li>
    <li class="mb-2"><strong>Change in speed:</strong> Can increase or decrease the speed of an object</li>
    <li class="mb-2"><strong>Change in direction:</strong> Can alter the direction of motion</li>
    <li class="mb-2"><strong>Change in shape:</strong> Can deform objects temporarily or permanently</li>
</ul>

<h3 class="text-2xl font-bold mb-4">Newton's Laws of Motion</h3>

<div class="bg-gray-50 p-4 rounded-lg mb-6">
    <h4 class="text-xl font-bold mb-2">First Law of Motion (Law of Inertia)</h4>
    <p class="mb-4">"An object continues to be in its state of rest or of uniform motion in a straight line unless acted upon by an external force."</p>
    
    <img src="https://images.examples.com/wp-content/uploads/2023/04/Newtons-First-Law-of-Motion-Examples-In-Everyday-Life.png" alt="Inertia examples" class="rounded-lg shadow-md mb-2" width="400">
    <figcaption class="text-center text-gray-600 text-sm">Figure 4: Examples demonstrating inertia in daily life</figcaption>
    
    <div class="mb-4">
        <strong>Detailed Examples:</strong>
        <ul class="list-disc pl-6 mb-2">
            <li class="mb-2"><strong>Passengers falling forward when bus stops:</strong>
                <ul class="list-disc pl-6 mt-2">
                    <li>Passengers' bodies continue to move forward due to inertia of motion</li>
                    <li>Bus stops due to brakes, but passengers' bodies want to maintain motion</li>
                </ul>
            </li>
            <li class="mb-2"><strong>Dust removal from carpet:</strong>
                <ul class="list-disc pl-6 mt-2">
                    <li>Carpet is beaten with a stick</li>
                    <li>Carpet moves, but dust particles continue to be at rest (inertia of rest)</li>
                    <li>Dust falls due to gravity</li>
                </ul>
            </li>
        </ul>
    </div>

    <div class="mb-4">
        <strong>Types of Inertia:</strong>
        <ul class="list-disc pl-6">
            <li class="mb-2"><strong>Inertia of rest:</strong> Resistance to change state of rest
                <ul class="list-disc pl-6 mt-2">
                    <li>Example: Difficulty in moving a heavy box</li>
                </ul>
            </li>
            <li class="mb-2"><strong>Inertia of motion:</strong> Resistance to change state of motion
                <ul class="list-disc pl-6 mt-2">
                    <li>Example: Object sliding on smooth surface continues to move</li>
                </ul>
            </li>
            <li class="mb-2"><strong>Inertia of direction:</strong> Resistance to change direction
                <ul class="list-disc pl-6 mt-2">
                    <li>Example: Satellites continuing in their orbital path</li>
                </ul>
            </li>
        </ul>
    </div>
</div>

<div class="bg-gray-50 p-4 rounded-lg mb-6">
    <h4 class="text-xl font-bold mb-2">Second Law of Motion</h4>
    <p class="mb-4">"The rate of change of momentum of an object is proportional to the applied force and takes place in the direction of the force."</p>
    
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh64rOD0U2M-zSA6SqcdtPzfSDMXWqMFlENA&s" alt="Second law demonstration" class="rounded-lg shadow-md mb-2">
    <figcaption class="text-center text-gray-600 text-sm">Figure 5: Illustration of Force, Mass, and Acceleration relationship</figcaption>
    
    <div class="mb-4">
        <strong>Mathematical Expression:</strong>
        <p class="font-mono mb-2">F = ma</p>
        <p class="mb-2">Where:</p>
        <ul class="list-disc pl-6">
            <li class="mb-2">F = Force (measured in Newtons, N)</li>
            <li class="mb-2">m = Mass (measured in kilograms, kg)</li>
            <li class="mb-2">a = Acceleration (measured in meters per second squared, m/s²)</li>
        </ul>
    </div>

    <div class="mb-4">
        <strong>Key Implications:</strong>
        <ul class="list-disc pl-6">
            <li class="mb-2">Double the force → Double the acceleration (if mass constant)</li>
            <li class="mb-2">Double the mass → Half the acceleration (if force constant)</li>
            <li class="mb-2">For same force, heavy objects accelerate less than lighter ones</li>
        </ul>
    </div>
</div>

<div class="bg-gray-50 p-4 rounded-lg mb-6">
    <h4 class="text-xl font-bold mb-2">Third Law of Motion</h4>
    <p class="mb-4">"For every action, there is an equal and opposite reaction."</p>
    
    <img src="/api/placeholder/400/300" alt="Third law examples" class="rounded-lg shadow-md mb-2">
    <figcaption class="text-center text-gray-600 text-sm">Figure 6: Action-Reaction pairs in different scenarios</figcaption>
    
    <div class="mb-4">
        <strong>Detailed Examples:</strong>
        <ul class="list-disc pl-6">
            <li class="mb-2"><strong>Rocket Propulsion:</strong>
                <ul class="list-disc pl-6 mt-2">
                    <li>Action: Rocket expels gases backward</li>
                    <li>Reaction: Gases push rocket forward</li>
                    <li>This principle enables space travel</li>
                </ul>
            </li>
            <li class="mb-2"><strong>Swimming:</strong>
                <ul class="list-disc pl-6 mt-2">
                    <li>Action: Swimmer pushes water backward</li>
                    <li>Reaction: Water pushes swimmer forward</li>
                    <li>Arms and legs both use this principle</li>
                </ul>
            </li>
            <li class="mb-2"><strong>Bird Flight:</strong>
                <ul class="list-disc pl-6 mt-2">
                    <li>Action: Wings push air downward</li>
                    <li>Reaction: Air pushes wings upward</li>
                    <li>Enables lift and forward motion</li>
                </ul>
            </li>
        </ul>
    </div>
</div>

<h3 class="text-2xl font-bold mb-4">Conservation of Momentum</h3>
<div class="mb-6">
    <p class="mb-4">In a closed system (no external forces), the total momentum remains constant before and after collision or interaction.</p>
    
    <img src="https://stickmanphysics.com/wp-content/uploads/2020/10/Newtons-3rd-wall.jpg" alt="Conservation of momentum" class="rounded-lg shadow-md mb-2" width="400">
    <figcaption class="text-center text-gray-600 text-sm">Figure 7: Conservation of momentum in collisions</figcaption>
    
    <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
        <p class="text-yellow-700">
            <strong>Mathematical Expression:</strong><br>
            m₁v₁ + m₂v₂ = m₁v₁' + m₂v₂'<br>
            Where:
            <ul class="list-disc pl-6 mt-2">
                <li>m₁, m₂ = masses of objects</li>
                <li>v₁, v₂ = initial velocities</li>
                <li>v₁', v₂' = final velocities</li>
            </ul>
        </p>
    </div>
</div>

<h3 class="text-2xl font-bold mb-4">Solved Examples</h3>

<div class="bg-gray-50 p-4 rounded-lg mb-6">
    <h4 class="text-xl font-bold mb-2">Example 1: Second Law of Motion</h4>
    <p class="mb-4"><strong>Problem:</strong> Calculate the force needed to accelerate a 20 kg object at 5 m/s².</p>
    <p class="mb-4"><strong>Solution:</strong></p>
    <p class="mb-2">Given:</p>
    <ul class="list-disc pl-6 mb-4">
        <li class="mb-2">Mass (m) = 20 kg</li>
        <li class="mb-2">Acceleration (a) = 5 m/s²</li>
    </ul>
    <p class="mb-2">Using F = ma:</p>
    <p class="mb-2">F = 20 kg × 5 m/s²</p>
    <p class="mb-2">F = 100 N</p>
</div>

<div class="bg-gray-50 p-4 rounded-lg mb-6">
    <h4 class="text-xl font-bold mb-2">Example 2: Conservation of Momentum</h4>
    <p class="mb-4"><strong>Problem:</strong> A 5 kg ball moving at 4 m/s collides with a 3 kg ball at rest. After collision, the 5 kg ball moves at 2 m/s. Find the velocity of the 3 kg ball.</p>
    <p class="mb-4"><strong>Solution:</strong></p>
    <ul class="list-disc pl-6 mb-4">
        <li class="mb-2">Initial momentum = Final momentum</li>
        <li class="mb-2">(5 kg)(4 m/s) + (3 kg)(0 m/s) = (5 kg)(2 m/s) + (3 kg)(v)</li>
        <li class="mb-2">20 = 10 + 3v</li>
        <li class="mb-2">3v = 10</li>
        <li class="mb-2">v = 3.33 m/s</li>
    </ul>
</div>

<div class="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
    <p class="text-green-700">
        <strong>Important Tips:</strong>
        <ul class="list-disc pl-6 mt-2">
            <li>Always draw free body diagrams when solving force problems</li>
            <li>Check units in calculations</li>
            <li>Consider all forces acting on the object</li>
            <li>Remember that force is a vector quantity</li>
        </ul>
    </p>
</div>
            `,
            "subject": "Science",
            "difficulty": "Intermediate",
            "relatedChapters": ["", "Gravitation"]
        }
        
        
        // Add more detailed chapters here
    ],
    mathematics: [
        {
            "title": "Linear Equations",
            "content": `
                <h2 class="text-3xl font-bold mb-4">Introduction to Linear Equations</h2>
                <p class="mb-4">A linear equation is an equation in which the highest power of the variable is one. Linear equations form straight lines when graphed on a coordinate plane and are fundamental in mathematics, representing relationships between variables in a simple, direct way.</p>
        
                <h3 class="text-2xl font-bold mb-3">Standard Form of a Linear Equation</h3>
                <p class="mb-4">In a linear equation with one variable, the standard form is:</p>
                <ul class="list-disc pl-6 mb-4">
                    <li><strong>Form:</strong> <span>ax + b = 0</span> where <span>a</span> and <span>b</span> are constants, and <span>x</span> is the variable.</li>
                    <li><strong>Example:</strong> <span>3x + 5 = 0</span></li>
                </ul>
                <p class="mb-4">In a linear equation with two variables, the standard form is:</p>
                <ul class="list-disc pl-6 mb-4">
                    <li><strong>Form:</strong> <span>ax + by + c = 0</span> where <span>a</span>, <span>b</span>, and <span>c</span> are constants, and <span>x</span> and <span>y</span> are variables.</li>
                    <li><strong>Example:</strong> <span>2x + 3y - 6 = 0</span></li>
                </ul>
        
                <h3 class="text-2xl font-bold mb-3">Types of Linear Equations</h3>
                <ul class="list-disc pl-6 mb-6">
                    <li><strong>Linear Equation in One Variable:</strong> Contains only one variable, such as <span>x</span> or <span>y</span>. Example: <span>4x - 8 = 0</span>.</li>
                    <li><strong>Linear Equation in Two Variables:</strong> Contains two variables, usually <span>x</span> and <span>y</span>. Example: <span>3x + 4y = 12</span>.</li>
                </ul>
        
                <h3 class="text-2xl font-bold mb-3">Solving Linear Equations in One Variable</h3>
                <p class="mb-4">To solve a linear equation in one variable, isolate the variable on one side of the equation. Perform operations to simplify.</p>
                <p class="mb-4"><strong>Example:</strong> Solve <span>5x - 10 = 15</span></p>
                <ul class="list-disc pl-6 mb-4">
                    <li>Step 1: Add 10 to both sides: <span>5x - 10 + 10 = 15 + 10</span>, which simplifies to <span>5x = 25</span>.</li>
                    <li>Step 2: Divide by 5 on both sides: <span>x = 5</span>.</li>
                </ul>
        
                <h3 class="text-2xl font-bold mb-3">Solving Linear Equations in Two Variables</h3>
                <p class="mb-4">Linear equations in two variables can have infinitely many solutions. To solve for specific values, additional information or equations are required. These equations are solved simultaneously.</p>
        
                <h4 class="text-xl font-bold mb-3">Graphical Method</h4>
                <p class="mb-4">Graph the equations on a coordinate plane and find the point where the lines intersect. This point of intersection is the solution to both equations.</p>
                <p class="mb-4"><strong>Example:</strong> Solve the system of equations <span>2x + 3y = 6</span> and <span>x - y = 1</span> by graphing.</p>
        
                <h4 class="text-xl font-bold mb-3">Substitution Method</h4>
                <p class="mb-4">In this method, solve one equation for one variable, then substitute this expression into the other equation.</p>
                <p class="mb-4"><strong>Example:</strong> Solve <span>2x + 3y = 6</span> and <span>x - y = 1</span>.</p>
                <ul class="list-disc pl-6 mb-4">
                    <li>Step 1: From <span>x - y = 1</span>, we get <span>x = y + 1</span>.</li>
                    <li>Step 2: Substitute <span>x = y + 1</span> into <span>2x + 3y = 6</span>: <span>2(y + 1) + 3y = 6</span>.</li>
                    <li>Step 3: Solve for <span>y</span>: <span>2y + 2 + 3y = 6</span> leads to <span>5y = 4</span> or <span>y = 0.8</span>.</li>
                    <li>Step 4: Substitute <span>y = 0.8</span> back into <span>x = y + 1</span> to get <span>x = 1.8</span>.</li>
                </ul>
        
                <h4 class="text-xl font-bold mb-3">Elimination Method</h4>
                <p class="mb-4">Add or subtract equations to eliminate one of the variables, then solve for the remaining variable.</p>
                <p class="mb-4"><strong>Example:</strong> Solve <span>2x + 3y = 12</span> and <span>3x - y = 5</span>.</p>
                <ul class="list-disc pl-6 mb-4">
                    <li>Step 1: Multiply the second equation by 3 to match the coefficients of <span>y</span>: <span>9x - 3y = 15</span>.</li>
                    <li>Step 2: Add both equations: <span>(2x + 3y) + (9x - 3y) = 12 + 15</span>, which simplifies to <span>11x = 27</span> or <span>x = 2.45</span>.</li>
                    <li>Step 3: Substitute <span>x = 2.45</span> into one of the original equations to solve for <span>y</span>.</li>
                </ul>
        
                <h3 class="text-2xl font-bold mb-3">Graphing Linear Equations</h3>
                <p class="mb-4">A linear equation in two variables can be represented as a straight line on a graph. To plot the line, find two points that satisfy the equation and draw a line through them.</p>
                <p class="mb-4"><strong>Example:</strong> Graph <span>y = 2x - 1</span>.</p>
                <ul class="list-disc pl-6 mb-4">
                    <li>Choose two values of <span>x</span>, say <span>x = 0</span> and <span>x = 2</span>.</li>
                    <li>Calculate <span>y</span> for each value of <span>x</span>: When <span>x = 0</span>, <span>y = -1</span>; when <span>x = 2</span>, <span>y = 3</span>.</li>
                    <li>Plot points <span>(0, -1)</span> and <span>(2, 3)</span> on the graph and draw a line through them.</li>
                </ul>
        
                <h3 class="text-2xl font-bold mb-3">Applications of Linear Equations</h3>
                <ul class="list-disc pl-6 mb-4">
                    <li><strong>Business and Economics:</strong> Linear equations are used in cost and revenue analysis, profit calculations, and budgeting.</li>
                    <li><strong>Physics:</strong> Linear equations describe relationships in motion, like calculating speed or distance.</li>
                    <li><strong>Engineering:</strong> Linear equations are used to model relationships and predict outcomes in engineering systems.</li>
                </ul>
            `,
            "subject": "Mathematics",
            "difficulty": "Intermediate",
            "relatedChapters": ["Polynomials", "Coordinate Geometry"]
        },
        {
            "title": "Number Systems",
            "content": `
                <h2 class="text-3xl font-bold mb-4">Introduction to Number Systems</h2>
                <p class="mb-4">The number system is a way to represent and classify numbers into different types. Understanding these systems helps us perform various mathematical operations and comprehend the structure of mathematics. This chapter covers different types of numbers, including natural numbers, whole numbers, integers, rational numbers, and irrational numbers.</p>
        
                <h3 class="text-2xl font-bold mb-3">Types of Numbers</h3>
                <p class="mb-4">The following are the main types of numbers you will encounter:</p>
                <ul class="list-disc pl-6 mb-6">
                    <li><strong>Natural Numbers (N):</strong> The counting numbers starting from 1. <span>N = {1, 2, 3, ...}</span></li>
                    <li><strong>Whole Numbers (W):</strong> All natural numbers including 0. <span>W = {0, 1, 2, 3, ...}</span></li>
                    <li><strong>Integers (Z):</strong> All whole numbers, including positive and negative numbers. <span>Z = {..., -3, -2, -1, 0, 1, 2, 3, ...}</span></li>
                    <li><strong>Rational Numbers (Q):</strong> Numbers that can be expressed as the ratio of two integers. A rational number is of the form <span>a/b</span>, where <span>b ≠ 0</span>. Example: 3/4, -2/5, 0.75.</li>
                    <li><strong>Irrational Numbers:</strong> Numbers that cannot be expressed as a fraction. Their decimal expansions are non-terminating and non-repeating. Examples include √2, π.</li>
                    <li><strong>Real Numbers (R):</strong> All rational and irrational numbers combined. Any number that can be represented on the number line is a real number.</li>
                </ul>
        
                <h3 class="text-2xl font-bold mb-3">Representation of Rational and Irrational Numbers</h3>
                <p class="mb-4">Numbers can be represented in two main forms:</p>
                <ul class="list-disc pl-6 mb-4">
                    <li><strong>Terminating Decimal:</strong> A decimal number that ends after a certain number of digits. Example: 0.25, 1.5.</li>
                    <li><strong>Non-Terminating, Repeating Decimal:</strong> A decimal number that repeats a pattern endlessly. Example: 0.333..., 1.272727...</li>
                    <li><strong>Non-Terminating, Non-Repeating Decimal:</strong> A decimal number that goes on forever without any repeating pattern. Example: π, √2.</li>
                </ul>
                
                <h3 class="text-2xl font-bold mb-3">Properties of Real Numbers</h3>
                <p class="mb-4">Real numbers follow various properties that are fundamental to mathematical operations:</p>
                <ul class="list-disc pl-6 mb-6">
                    <li><strong>Closure Property:</strong> The result of addition, subtraction, multiplication, and division (except by zero) of two real numbers is always a real number.</li>
                    <li><strong>Commutative Property:</strong> For any two real numbers <span>a</span> and <span>b</span>, <span>a + b = b + a</span> and <span>a × b = b × a</span>.</li>
                    <li><strong>Associative Property:</strong> For any three real numbers <span>a</span>, <span>b</span>, and <span>c</span>, <span>(a + b) + c = a + (b + c)</span> and <span>(a × b) × c = a × (b × c)</span>.</li>
                    <li><strong>Distributive Property:</strong> For any real numbers <span>a</span>, <span>b</span>, and <span>c</span>, <span>a × (b + c) = (a × b) + (a × c)</span>.</li>
                    <li><strong>Identity Element:</strong> For addition, 0 is the identity element as <span>a + 0 = a</span>. For multiplication, 1 is the identity element as <span>a × 1 = a</span>.</li>
                    <li><strong>Inverse Element:</strong> For every real number <span>a</span>, there exists an additive inverse <span>-a</span> such that <span>a + (-a) = 0</span>. For every non-zero real number <span>a</span>, there exists a multiplicative inverse <span>1/a</span> such that <span>a × (1/a) = 1</span>.</li>
                </ul>
        
                <h3 class="text-2xl font-bold mb-3">Rationalizing the Denominator</h3>
                <p class="mb-4">In some cases, it is useful to simplify an expression by removing irrational numbers from the denominator. This process is called rationalizing the denominator.</p>
                <p class="mb-4"><strong>Example:</strong> Rationalize the denominator of <span>1 / √2</span>.</p>
                <ul class="list-disc pl-6 mb-4">
                    <li>Multiply both the numerator and denominator by <span>√2</span>: <span>(1 × √2) / (√2 × √2) = √2 / 2</span>.</li>
                </ul>
        
                <h3 class="text-2xl font-bold mb-3">Real Numbers and Their Decimal Expansions</h3>
                <p class="mb-4">The decimal expansion of real numbers can help us classify them as rational or irrational:</p>
                <ul class="list-disc pl-6 mb-6">
                    <li><strong>Terminating Decimals:</strong> If a decimal terminates, it represents a rational number. Example: 0.75 = 3/4.</li>
                    <li><strong>Non-Terminating, Repeating Decimals:</strong> If a decimal is non-terminating but repeats, it represents a rational number. Example: 0.666... = 2/3.</li>
                    <li><strong>Non-Terminating, Non-Repeating Decimals:</strong> If a decimal neither terminates nor repeats, it is an irrational number. Example: π, √3.</li>
                </ul>
        
                <h3 class="text-2xl font-bold mb-3">Real Numbers on the Number Line</h3>
                <p class="mb-4">Any real number can be represented on the number line. To locate an irrational number, we can approximate it to a decimal value.</p>
                <p class="mb-4"><strong>Example:</strong> To locate √2 on the number line, approximate √2 ≈ 1.414 and mark the point between 1 and 2.</p>
        
                <h3 class="text-2xl font-bold mb-3">Operations on Real Numbers</h3>
                <p class="mb-4">Real numbers can be added, subtracted, multiplied, and divided (except by zero) following standard arithmetic rules.</p>
                <ul class="list-disc pl-6 mb-6">
                    <li><strong>Addition:</strong> When adding two real numbers, add their decimal or fraction parts directly.</li>
                    <li><strong>Subtraction:</strong> Subtract the decimal or fraction parts to get the result.</li>
                    <li><strong>Multiplication:</strong> Multiply the two numbers as usual. For irrational numbers, express them in decimal or square root form.</li>
                    <li><strong>Division:</strong> Divide the numbers, ensuring the denominator is not zero.</li>
                </ul>
        
                <h3 class="text-2xl font-bold mb-3">Applications of Number Systems</h3>
                <ul class="list-disc pl-6 mb-4">
                    <li><strong>Financial Calculations:</strong> Rational and real numbers are used in budgeting, interest calculations, and other financial models.</li>
                    <li><strong>Measurement and Construction:</strong> Real numbers help in measuring distances, areas, and volumes, especially when irrational numbers like √2 and π are involved.</li>
                    <li><strong>Science and Engineering:</strong> Real and irrational numbers are crucial in calculations for physics, chemistry, and engineering.</li>
                </ul>
            `,
            "subject": "Mathematics",
            "difficulty": "Intermediate",
            "relatedChapters": ["Polynomials", "Linear Equations"]
        },
        {
            "title": "Polynomials",
            "content": `
                <h2 class="text-3xl font-bold mb-6">Polynomials</h2>

<div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
    <p class="text-yellow-700">
        <strong>Note:</strong> A polynomial's degree is the highest power of the variable in it. The degree helps us understand the type of polynomial and how many solutions (or zeroes) it can have.
    </p>
</div>

<h3 class="text-2xl font-bold mb-4">1. What is a Polynomial?</h3>
<p class="mb-4">A polynomial in one variable (like <math><mi>x</mi></math>) is an expression that can look like this:</p>
<p class="mb-4">
    <math>
        <mi>p</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><msup><mi>a</mi><sub><mn>n</mn></sub></msup><msup><mi>x</mi><mn>n</mn></msup><mo>+</mo><msup><mi>a</mi><sub><mn>n-1</mn></sub></msup><msup><mi>x</mi><mn>n-1</mn></msup><mo>+</mo>...<mo>+</mo><mi>a</mi><sub><mn>0</mn></sub>
    </math>
</p>
<p class="mb-4">Each <math><mi>a</mi></math> is a number called a "coefficient," and <math><mi>x</mi></math> is the variable. The powers of <math><mi>x</mi></math> (like <math><msup><mi>x</mi><mn>2</mn></msup></math> or <math><msup><mi>x</mi><mn>3</mn></msup></math>) tell us the degree of the polynomial.</p>

<h3 class="text-2xl font-bold mb-4">2. Types of Polynomials</h3>
<ul class="list-disc pl-6 mb-6">
    <li><strong>Constant Polynomial:</strong> Just a single number, like <math><mn>-6</mn></math> or <math><mn>4</mn></math>.</li>
    <li><strong>Zero Polynomial:</strong> A polynomial that equals zero, like <math><mn>0</mn></math>.</li>
    <li><strong>Monomial:</strong> Has only one term, like <math><mn>7x</mn></math>.</li>
    <li><strong>Binomial:</strong> Has two terms, like <math><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi></math>.</li>
    <li><strong>Trinomial:</strong> Has three terms, like <math><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mo>+</mo><mn>5</mn></math>.</li>
</ul>

<h3 class="text-2xl font-bold mb-4">3. Degree of a Polynomial</h3>
<p class="mb-4">The "degree" of a polynomial is the highest power of the variable in it.</p>

<ul class="list-disc pl-6 mb-4">
    <li><strong>One Variable:</strong> The degree is the highest exponent. Example: In <math><msup><mi>x</mi><mn>4</mn></msup><mo>+</mo><msup><mi>x</mi><mn>3</mn></msup></math>, the degree is 4.</li>
    <li><strong>Multiple Variables:</strong> For polynomials with more than one variable, add up the exponents in each term. The highest sum is the degree. Example: In <math><msup><mi>x</mi><mn>3</mn></msup><mi>y</mi><msup><mn>2</mn></msup><mo>+</mo><mn>8</mn></math>, the degree is 5 (from <math><msup><mi>x</mi><mn>3</mn></msup><mi>y</mi><msup><mn>2</mn></msup></math>).</li>
</ul>

<div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
    <p class="text-yellow-700">
        <strong>Note:</strong> The degree of a constant polynomial (like 5) is zero. For a zero polynomial, the degree is undefined.
    </p>
</div>

<h3 class="text-2xl font-bold mb-4">4. Key Types of Polynomials by Degree</h3>
<ul class="list-disc pl-6 mb-4">
    <li><strong>Linear Polynomial:</strong> Degree is 1. Example: <math><mi>x</mi><mo>+</mo><mn>3</mn></math>.</li>
    <li><strong>Quadratic Polynomial:</strong> Degree is 2. Example: <math><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>9</mn></math>.</li>
    <li><strong>Cubic Polynomial:</strong> Degree is 3. Example: <math><mi>a</mi><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mi>b</mi><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>c</mi><mi>x</mi><mo>+</mo><mi>d</mi></math>.</li>
</ul>

<h3 class="text-2xl font-bold mb-4">5. Value of a Polynomial</h3>
<p class="mb-4">To find the value of a polynomial <math><mi>p</mi><mo>(</mo><mi>x</mi><mo>)</mo></math> at a certain number (like <math><mi>x</mi><mo>=</mo><mi>2</mi></math>), we just plug in the value of <math><mi>x</mi></math> and calculate:</p>
<p class="mb-4">
    Example: If <math><mi>p</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>6</mn></math>, then at <math><mi>x</mi><mo>=</mo><mn>2</mn></math>, <math><mi>p</mi><mo>(</mo><mn>2</mn><mo>)</mo><mo>=</mo><mn>2</mn><msup><mn>2</mn><mo>=</mo><mn>4</mn><mo>+</mo><mn>4</mn><mo>+</mo><mn>6</mn><mo>=</mo><mn>14</mn></math>.
</p>

<h3 class="text-2xl font-bold mb-4">6. Zeroes of a Polynomial</h3>
<p class="mb-4">A "zero" of a polynomial is a value of <math><mi>x</mi></math> that makes the polynomial equal zero.</p>
<ul class="list-disc pl-6 mb-4">
    <li>Every linear polynomial has exactly one zero.</li>
    <li>The maximum number of zeroes a polynomial can have is equal to its degree.</li>
</ul>

<h3 class="text-2xl font-bold mb-4">7. Remainder Theorem</h3>
<p class="mb-4">If a polynomial <math><mi>p</mi><mo>(</mo><mi>x</mi><mo>)</mo></math> is divided by <math><mi>x</mi><mo>-</mo><mi>a</mi></math>, the remainder is <math><mi>p</mi><mo>(</mo><mi>a</mi><mo>)</mo></math>.</p>
<p class="mb-4">Formula: <math><mi>p</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo>(<mi>x</mi><mo>-</mo><mi>a</mi>)<mo>⋅</mo><mi>q</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>+</mo><mi>r</mi></math></p>

<h3 class="text-2xl font-bold mb-4">8. Factor Theorem</h3>
<p class="mb-4">If <math><mi>q</mi><mo>(</mo><mi>x</mi><mo>)</mo></math> is a polynomial:</p>
<ul class="list-disc pl-6 mb-6">
    <li><math>(<mi>x</mi><mo>-</mo><mi>a</mi>)</math> is a factor of <math><mi>q</mi><mo>(</mo><mi>x</mi><mo>)</mo></math> if <math><mi>q</mi><mo>(</mo><mi>a</mi><mo>)</mo><mo>=</mo><mn>0</mn></math>.</li>
</ul>

<h3 class="text-2xl font-bold mb-4">9. Key Algebraic Identities</h3>
<p class="mb-4">These identities make it easier to expand and factor polynomials:</p>
<ul class="list-disc pl-6 mb-4">
    <li><math>(<mi>x</mi><mo>+</mo><mi>y</mi>)<msup><mn>2</mn></msup><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>xy</mi><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></math></li>
    <li><math>(<mi>x</mi><mo>-</mo><mi>y</mi>)<msup><mn>2</mn></msup><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>2</mn><mi>xy</mi><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></math></li>
    <li><math><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo>(<mi>x</mi><mo>+</mo><mi>y</mi>)(<mi>x</mi><mo>-</mo><mi>y</mi>)</math></li>
</ul>


            `,
            "subject": "Mathematics",
            "difficulty": "Intermediate",
            "relatedChapters": ["Linear Equations", "Quadratic Equations"]
        },
        {
            "title": "Lines and Angles",
            "content": `
            <h2 class="text-3xl font-bold mb-4">Basic Terms and Definitions on Lines and Angles</h2>
<p class="mb-4"><strong>Line Segment:</strong> A line that has two endpoints is called a line segment.</p>
<img src="https://media.geeksforgeeks.org/wp-content/uploads/20211214074602/linesegament.jpg">
<p class="mb-4"><strong>Ray:</strong> A line with one endpoint and the other end of the line extending up to infinity is called a ray.</p>
<img src="https://cdn1.byjus.com/wp-content/uploads/2020/01/Ray-example.png">
<p class="mb-4"><strong>Collinear points:</strong> When three or more points lie on the same line, they are said to be collinear.</p>
<p class="mb-4"><strong>Non-collinear points:</strong> When three or more points do not lie on the same line, they are non-collinear.</p>
<p class="mb-4"><strong>Angle:</strong> An angle is formed by two rays meeting at a common point (called a vertex), and the rays forming the angle are called arms of the angle.</p>
<h3 class="text-2xl font-bold mb-4">Types of Angles</h3>
<ul class="list-disc pl-6 mb-6">
    <li class="mb-2"><strong>Acute Angle:</strong> An angle that measures between 0° and 90° is called an acute angle.</li>
    <li class="mb-2"><strong>Obtuse angle:</strong> An angle that measures between 90° and 180° is called an obtuse angle.</li>
    <li class="mb-2"><strong>Right angle:</strong> An angle that is equal to 90° is called a right angle.</li>
    <li class="mb-2"><strong>Reflex angle:</strong> An angle greater than 180° but less than 360° is called a reflex angle.</li>
</ul>
<img src="https://s3.amazonaws.com/images.powershow.com/P1256588991FBxMa.pr.jpg">
<h3 class="text-2xl font-bold mb-4">Supplementary angles and Complementary angles</h3>
<ul class="list-disc pl-6 mb-6">
    <li class="mb-2"><strong>Complementary angles:</strong> When sum of two angles is equal to 90°.</li>
    <img src="https://softschools.com/math/geometry/topics/images/supplementary_and_complementary_angles_image2.png">
    <li class="mb-2"><strong>Supplementary angles:</strong> When sum of two angles is equal to 180°.</li>
    <img src="https://softschools.com/math/geometry/topics/images/supplementary_and_complementary_angles_image1.png">
</ul>
<h3 class="text-2xl font-bold mb-4">Relation between two Angles</h3>
<ul class="list-disc pl-6 mb-6">
    <li class="mb-2"><strong>Adjacent Angles:</strong> If two angles have the same vertex and their one of the arm is common then these are called adjacent angles.</li>
    <img src="https://files.askiitians.com/cdn/images/20181013-1365851-8914-adjacent-angles.png">
    <li class="mb-2"><strong>Linear pair of Angles:</strong> If two angles have the same vertex and one common arm but the arms which are not common are making a line then these are called the linear pair of angles.</li>
    <img src="https://files.askiitians.com/cdn/images/20181013-13722956-9387-linear-pair-of-angles.png">
    <li class="mb-2"><strong>Vertically opposite Angles:</strong> If two lines intersect each other at a point then the opposite angles are vertically opposite angles.</li>
    <img src="https://files.askiitians.com/cdn/images/20181013-13814752-4803-vertically-opposite-angles.png">
</ul>
<h3 class="text-2xl font-bold">Intersecting Lines and Non-intersecting Lines</h3>
<p class="mb-4">There are two ways to draw two lines-</p>
<ol class="list-decimal pl-6 mb-6">
    <li class="mb-2">The lines which cross each other from a particular point is called <strong>Intersecting Lines</strong></li>
    <li class="mb-2">The lines which never cross each other at any point are called <strong>Non-intersecting Lines</strong>. These lines are called <strong>Parallel Lines</strong> and the common length between two lines is the distance between parallel lines.</li>
    <img src="https://files.askiitians.com/cdn/images/20181013-13718706-6311-intersecting-lines-and-non-intersecting-lines.png">
</ol>
<h3 class="text-2xl font-bold mb-4">Pairs of Angles Axioms</h3>
<ol class="list-decimal pl-6 mb-6">
    <li class="mb-2"><strong>If a ray stands on a line, then the sum of two adjacent angles formed by that ray is 180°.</strong></li>
    <img src="https://files.askiitians.com/cdn/images/20181013-13736534-4296-pairs-of-angles-axioms.png">
    <p class="mb-4">This shows that the common arm of the two angles is the ray which is standing on a line and the two adjacent angles are the linear pair of the angles. As the sum of two angles is 180° so these are supplementary angles too.</p>
    <li class="mb-2"><strong>If the sum of two adjacent angles is 180°, then the arms which are not common of the angles form a line.</strong></li>
    <p class="mb-4">This is the reverse of the first axiom which says that the opposite is also true.   </p>
</ol>
<h3 class="text-2xl font-bold mb-4">Vertically opposite Angles Theorem</h3>
<p class="mb-4">When two lines intersect each other, then the vertically opposite angles so formed will be equal.</p>
<img src="https://files.askiitians.com/cdn/images/20181013-13818564-4880-vertically-opposite-angles-theorem.png">
<p class="mb-4">AC and BD are intersecting each other so ∠AOD = ∠BOC and ∠AOB = DOC.</p>
<h3 class="text-2xl font-bold mb-4">Parallel Lines and a Transversal</h3>
<p class="mb-4">If a line passes through two distinct lines and intersects them at distant points then this line is called <strong>Transversal Line</strong></p>
<p class="mb-4">Here line “l” is transversal of line m and n.</p>
<img alt="Parallel Lines and a Transversal" src="https://files.askiitians.com/cdn/images/20181013-13741331-5038-parallel-lines-and-a-transversal.png" style="text-align: center; float: right;" title="Parallel Lines and a Transversal">
<p class="mb-4"><strong>Exterior Angles</strong> - ∠1, ∠2, ∠7 and ∠8</p>
<p class="mb-4"><strong>Interior Angles</strong> - ∠3, ∠4, ∠5 and ∠6</p>
<p class="mb-4">Pairs of angles formed when a transversal intersects two lines-</p>
<ol class="list-decimal pl-6 mb-6">
    <li><strong>Corresponding Angles :</strong></li>
    <ul class="list-disc pl-6 mb-6">
        <li class="mb-2">∠ 1 and ∠ 5</li>
        <li class="mb-2">
        <p class="mb-4">∠ 2 and ∠ 6</p>
        </li>
        <li class="mb-2">
        <p class="mb-4">∠ 4 and ∠ 8</p>
        </li>
        <li class="mb-2">
        <p class="mb-4">∠ 3 and ∠ 7</p>
        </li>
    </ul>
    <li><strong>Alternate Interior Angles :</strong></li>
    <ul class="list-disc pl-6 mb-6">
        <li class="mb-2">
        <p class="mb-4">∠ 4 and ∠ 6</p>
        </li>
        <li class="mb-2">
        <p class="mb-4">∠ 3 and ∠ 5</p>
        </li>
    </ul>
    <li><strong>Alternate Exterior Angles:</strong></li>
    <ul class="list-disc pl-6 mb-6">
        <li class="mb-2">
        <p class="mb-4">∠ 1 and ∠ 7</p>
        </li>
        <li class="mb-2">
        <p class="mb-4">∠ 2 and ∠ 8</p>
        </li>
    </ul>
    <li class="mb-2"><strong>Interior Angles on the same side of the transversal:</strong></li>
    <ul class="list-disc pl-6 mb-6">
        <li class="mb-2">
        <p class="mb-4">∠ 4 and ∠ 5</p>
        </li>
        <li class="mb-2">
        <p class="mb-4">∠ 3 and ∠ 6</p>
        </li>
    </ul>
</ol>
<h3 class="text-2xl font-bold mb-4">Transversal Axioms</h3>
<ol class="list-decimal pl-6 mb-6">
    <li class="mb-2"><strong>If a transversal intersects two parallel lines, then</strong></li>
    <img alt="Transversal Axioms" src="https://files.askiitians.com/cdn/images/20181013-1386408-8859-transversal-axioms.png" style="float: right;" title="Transversal Axioms">
    <ul class="list-disc pl-6 mb-6">
        <li class="mb-2">
        <p>Each pair of corresponding angles will be equal.?</p>
        </li>
        <li class="mb-2">
        <p class="mb-4">Each pair of alternate interior angles will be equal.</p>
        </li>
        <li class="mb-2">
        <p class="mb-4">Each pair of interior angles on the same side of the transversal will be supplementary.</p>
        </li>
    </ul>
    <li class="mb-2"><strong>If a transversal intersects two lines in such a way that</strong></li>
    <ul class="list-disc pl-6 mb-6">
        <li class="mb-2">
        <p class="mb-4">Corresponding angles are equal then these two lines will be parallel to each other.</p>
        </li>
        <li class="mb-2">
        <p class="mb-4">Alternate interior angles are equal then the two lines will be parallel.</p>
        </li>
        <li class="mb-2">
        <p class="mb-4">Interior angles on the same side of the transversal are supplementary then the two lines will be parallel.</p>
        </li>
    </ul>
</ol>
<h3 class="text-2xl font-bold mb-4">Example</h3>
<p class="mb-4">Find ∠DGH.</p>
<p class="mb-4" style="text-align: center;"><img alt="Corresponding Angles" src="https://files.askiitians.com/cdn/images/20181013-14351840-8617-corresponding-angles.png" title="Corresponding Angles"></p>
<p>&nbsp;</p>
<h3 class="text-2xl font-bold mb-4">Solution</h3>
<p class="mb-4">Here, AB ∥ CD and EH is transversal.</p>
<p class="mb-4">∠EFB + ∠BFG = 180° (Linear pair)</p>
<p class="mb-4">∠BFG = 180°- 133°  </p>
<p class="mb-4">∠BFG = 47°</p>
<p class="mb-4">∠BFG =∠DGH (Corresponding Angles)</p>
<p class="mb-4">∠DGH = 47°</p>
<h3 class="text-2xl font-bold mb-4">Lines Parallel to the Same Line</h3>
<p style="text-align: center;"><img alt="Lines Parallel to the Same Line" src="https://files.askiitians.com/cdn/images/20181013-13728816-8286-lines-parallel-to-the-same-line.png" title="Lines Parallel to the Same Line"></p>
<p class="mb-4">If two lines are parallel with a common line then these two lines will also be parallel to each other.</p>
<p class="mb-4">As in the above figure if AB ∥ CD and EF ∥ CD then AB ∥ EF.</p>
<h3 class="text-2xl font-bold mb-4">Angle Sum Property of a Triangle</h3>
<ol class="list-decimal pl-6 mb-6">
    <li class="mb-2">The sum of the angles of a triangle is 180º.</li>
    <p style="text-align: center;"><img alt="The sum of the angles of a triangle is 180º." src="https://files.askiitians.com/cdn/images/20181013-13758596-1769-sum-of-the-angles-of-a-triangle-is-180º.png" title="The sum of the angles of a triangle is 180º."></p>
    <p class="mb-4">∠A + ∠B + ∠C = 180°</p>
    <li class="mb-4">If we produce any side of a triangle, then the exterior angle formed is equal to the sum of the two interior opposite angles.</li>
    <p style="text-align: center;"><img alt="The exterior angle formed is equal to the sum of the two interior opposite angles" src="https://files.askiitians.com/cdn/images/20181013-13810471-9775-triangle.png" title="The exterior angle formed is equal to the sum of the two interior opposite angles"></p>
    <p class="mb-4">∠BCD = ∠BAC + ∠ABC</p>
</ol>
<h3 class="text-2xl font-bold mb-4">Example</h3>
<p class="mb-4">Find x and y.</p>
<p style="text-align: center;"><img alt="Angle" src="https://files.askiitians.com/cdn/images/20181013-1371879-7355-angle.png" title="Angle"></p>
<p>&nbsp;</p>
<h3 class="text-2xl font-bold mb-4">Solution</h3>
<p class="mb-4">Here, ∠A + ∠B + ∠C = 180° (Angle sum property)</p>
<p class="mb-4" style="margin-left: 40px;">30°+ 42° + x = 180°</p>
<p class="mb-4" style="margin-left: 40px;">x = 180°- (30° + 42°)</p>
<p class="mb-4" style="margin-left: 40px;">x = 108°</p>
<p class="mb-4">And y is the exterior angle and the two opposite angles are ∠A and ∠B.</p>
<p class="mb-4">So,</p>
<p class="mb-4">∠BCD = ∠A + ∠B (Exterior angle is equal to the sum of the two interior opposite angles).</p>
<p class="mb-4" style="margin-left: 40px;">y = 30°+ 42°</p>
<p class="mb-4" style="margin-left: 40px;">y = 72°</p>
<p class="mb-4">We can also find it by linear pair axiom as BC is a ray on the line AD, so</p>
<p class="mb-4" style="margin-left: 40px;">x + y = 180° (linear pair)</p>

         `,
            "subject": "Mathematics",
            "difficulty": "Intermediate",
            "relatedChapters": ["Linear Equations", "Quadratic Equations"]
        },
        
        // Add more detailed chapters here
    ],
    english:[
        {
            "title": "The Fun They Had",
            "content": `
                <h2 class="text-3xl font-bold mb-4">Introduction to "The Fun They Had"</h2>
                <p class="mb-4">"The Fun They Had" is a science fiction story by Isaac Asimov that explores the future of education through the perspective of two young children, Margie and Tommy. Set in the year 2157, it contrasts their future computerized schooling with the traditional schooling of the past, highlighting themes of technology, nostalgia, and the value of human interaction in learning.</p>
                
                <h3 class="text-2xl font-bold mb-3">Summary of the Story</h3>
                <p class="mb-4">The story begins with 11-year-old Margie Jones writing in her diary about an unusual discovery made by her friend Tommy, a 13-year-old boy. Tommy has found a real "book," something unheard of in their time where books are entirely digital, displayed on computer screens. The book describes schools from centuries ago, where students were taught by human teachers in physical classrooms and sat together to learn.</p>
                <p class="mb-4">Margie, who studies alone at home with a robotic teacher that operates from a computer, is fascinated by the idea of a school with real human interaction. Her mechanical teacher, which she finds boring and difficult, lacks the warmth and flexibility of a human teacher. Through the story, Margie imagines how fun it must have been for students in the past to study together, sharing stories and learning in a communal setting.</p>
        
                <h3 class="text-2xl font-bold mb-3">Characters</h3>
                <ul class="list-disc pl-6 mb-4">
                    <li><strong>Margie Jones:</strong> An 11-year-old girl who dislikes her mechanical teacher and yearns for a different form of schooling. Her curiosity about traditional schools reveals her desire for human interaction in learning.</li>
                    <li><strong>Tommy:</strong> A 13-year-old boy, Margie's friend, who is more knowledgeable about the past. He discovers the "real book" and shares it with Margie, sparking her curiosity about old-fashioned schools.</li>
                    <li><strong>Mechanical Teacher:</strong> A computerized device that teaches Margie various subjects. It lacks empathy and personalization, which frustrates Margie, making her long for a more interactive learning experience.</li>
                </ul>
        
                <h3 class="text-2xl font-bold mb-3">Themes</h3>
                <ul class="list-disc pl-6 mb-6">
                    <li><strong>Impact of Technology on Education:</strong> The story explores how technology could replace traditional methods of teaching, but it also highlights potential downsides, such as the lack of social interaction and emotional connection.</li>
                    <li><strong>Nostalgia for the Past:</strong> Through Margie's fascination with traditional schools, the story conveys a sense of nostalgia and appreciation for human-centered education, something that might be lost in the future.</li>
                    <li><strong>Isolation vs. Community:</strong> Margie’s solitary learning experience contrasts with the communal learning of the past, highlighting the importance of social connections and friendships in education.</li>
                </ul>
        
                <h3 class="text-2xl font-bold mb-3">Analysis</h3>
                <p class="mb-4">Asimov’s story serves as a commentary on the future of education, raising questions about how much technology should be integrated into schooling. Although technology offers many benefits, the story suggests that it cannot fully replace the human elements of teaching and learning. Margie’s longing for a "real school" reflects a common sentiment that human connections play an essential role in personal growth and happiness. Through its futuristic lens, the story encourages readers to think about the value of interpersonal relationships in learning environments.</p>
                
                <h3 class="text-2xl font-bold mb-3">Important Quotes</h3>
                <ul class="list-disc pl-6 mb-6">
                    <li><strong>"They turned the pages, which were yellow and crinkly, and it was awfully funny to read words that stood still instead of moving."</strong> - This quote emphasizes the novelty of physical books for Margie and Tommy, who are used to digital screens.</li>
                    <li><strong>"Margie was thinking about how the kids must have loved it in the old days."</strong> - This line reflects Margie’s fascination and idealization of the past educational system, which she believes was more enjoyable than her own.</li>
                </ul>
                
                <h3 class="text-2xl font-bold mb-3">Message of the Story</h3>
                <p class="mb-4">The story conveys that while technology can transform education, it cannot replace the social and emotional experiences that come with human interaction in a classroom. Asimov suggests that traditional schooling offers a sense of camaraderie and shared learning that may be missing in a highly computerized future.</p>
        
                <h3 class="text-2xl font-bold mb-3">Moral of the Story</h3>
                <p class="mb-4">The moral of "The Fun They Had" is to recognize the importance of social interactions and relationships in education. While technology can provide knowledge, true learning often comes from collaborative experiences and the guidance of a compassionate teacher. The story encourages readers to value both technological advancements and the human aspects of learning.</p>
            `,
            "subject": "English",
            "difficulty": "Intermediate",
            "relatedChapters": ["The Road Not Taken", "The Little Girl"]
        },
        {
            "title": "The Road Not Taken",
            "content": `
                <h2 class="text-3xl font-bold mb-4">Introduction to "The Road Not Taken"</h2>
                <p class="mb-4">"The Road Not Taken" is a renowned poem by Robert Frost, a prominent American poet. Published in 1916 as part of his collection "Mountain Interval," the poem explores themes of choices, individuality, and the consequences of decisions. It is often interpreted as a reflection on the importance of making unique choices in life.</p>
        
                <h3 class="text-2xl font-bold mb-3">Summary of the Poem</h3>
                <p class="mb-4">The poem describes a traveler who comes to a fork in the road in a yellow wood. He must decide which path to take, symbolizing a choice in life. He carefully examines both paths and chooses the one that appears less traveled, although he later realizes that both paths are equally worn. The traveler reflects on his decision, recognizing that choices are final and often lead to unexpected outcomes. He concludes that his choice has significantly influenced his life.</p>
        
                <h3 class="text-2xl font-bold mb-3">Themes</h3>
        <ul class="list-disc pl-6 mb-6">
            <li><strong>Choices and Consequences:</strong> The poem explores the impact of choices on life’s direction. Every decision leads to a new path with its own outcomes.</li>
            <li><strong>Individualism and Nonconformity:</strong> By choosing the "less traveled" road, the speaker represents individuality and the courage to make unconventional decisions.</li>
            <li><strong>Reflection and Regret:</strong> The poem captures the human tendency to wonder about "what might have been" and the inherent regret in making irreversible choices.</li>
        </ul>

        <h3 class="text-2xl font-bold mb-3">Themes in Detail</h3>
                <p class="mb-4"><strong>Choices and Decisions:</strong> The poem delves into the inevitability of making choices in life and the weight they carry. It underscores that each decision leads to a unique path, shaping our future experiences.</p>
                <p class="mb-4"><strong>Individuality:</strong> By choosing the "one less traveled by," the speaker emphasizes the value of making independent and personal decisions rather than following the crowd.</p>
                <p class="mb-4"><strong>Regret and Anticipation:</strong> The reflective tone suggests that the speaker anticipates a future where he will look back on his decision, contemplating its impact and perhaps wondering about the alternative path.</p>
                <p class="mb-4"><strong>Consequences:</strong> Every choice has consequences, and the poem reflects on how a single decision can alter the course of one’s life.</p>
        
                <h3 class="text-2xl font-bold mb-3">Literary Devices</h3>
                <ul class="list-disc pl-6 mb-6">
                    <li><strong>Metaphor:</strong> The diverging roads symbolize life choices.</li>
                    <li><strong>Imagery:</strong> Vivid descriptions of the forest and paths create a visual representation of the dilemma.</li>
                    <li><strong>Symbolism:</strong> Roads represent different life paths and decisions.</li>
                    <li><strong>Rhyme Scheme:</strong> ABAAB rhyme scheme adds a musical quality to the poem.</li>
                    <li><strong>Tone:</strong> Reflective and contemplative, conveying the speaker's thoughtful consideration.</li>
                </ul>
        
                <h2 class="text-3xl font-bold mb-3">Detailed Analysis</h2>
                <blockquote class="italic mb-4">
            <p>Two roads diverged in a yellow wood,<br>
            And sorry I could not travel both<br>
            And be one traveler, long I stood<br>
            And looked down one as far as I could<br>
            To where it bent in the undergrowth;</p>
            <p> .
            </p>
            <p>Then took the other, as just as fair,<br>
            And having perhaps the better claim,<br>
            Because it was grassy and wanted wear;<br>
            Though as for that the passing there<br>
            Had worn them really about the same,</p>
            <p>.
             </p>
            <p>And both that morning equally lay<br>
            In leaves no step had trodden black.<br>
            Oh, I kept the first for another day!<br>
            Yet knowing how way leads on to way,<br>
            I doubted if I should ever come back.</p>
            <p> .
            </p>
            <p>I shall be telling this with a sigh<br>
            Somewhere ages and ages hence:<br>
            Two roads diverged in a wood, and I—<br>
            I took the one less traveled by,<br>
            And that has made all the difference.</p>
        </blockquote>


        <h3 class="text-2xl font-bold mb-3">Stanza-by-Stanza Explanation</h3>
        
        <h4 class="text-xl font-bold mb-2">Stanza 1</h4>
        <p class="mb-4">The speaker stands at a fork in the road in a forest during autumn. He is regretful that he cannot take both paths and spends a long time deciding which one to follow. This moment represents a point in life where a person must make a crucial decision.</p>
        
        <h4 class="text-xl font-bold mb-2">Stanza 2</h4>
        <p class="mb-4">The speaker chooses the second path, believing it to be "grassy and wanted wear." However, he acknowledges that, in reality, both paths are equally worn. This indicates that choices often appear unique but may ultimately lead to similar experiences.</p>
        
        <h4 class="text-xl font-bold mb-2">Stanza 3</h4>
        <p class="mb-4">The paths are described as equally covered in leaves, suggesting that both are fresh and untraveled that day. The speaker hopes to keep the first path for another day, though he doubts he will return. This illustrates the nature of choices: once made, they are difficult to reverse.</p>
        
        <h4 class="text-xl font-bold mb-2">Stanza 4</h4>
        <p class="mb-4">The speaker predicts that he will look back on this choice with a "sigh," reflecting on how his decision has impacted his life. He believes taking the "road less traveled" has made a significant difference, symbolizing how individual choices shape one's unique life journey.</p>
        
                <h3 class="text-2xl font-bold mb-3">Characters</h3>
                <ul class="list-disc pl-6 mb-4">
                    <li><strong>Speaker:</strong> The narrator of the poem, representing an individual faced with a crucial life decision.</li>
                </ul>
        
                <h3 class="text-2xl font-bold mb-3">Important Quotes and Their Significance</h3>
                <ul class="list-disc pl-6 mb-6">
                    <li><strong>"Two roads diverged in a yellow wood,":</strong> Introduces the central metaphor of life choices.</li>
                    <li><strong>"And sorry I could not travel both":</strong> Expresses the regret of being unable to pursue multiple paths simultaneously.</li>
                    <li><strong>"I took the one less traveled by,":</strong> Highlights the speaker’s desire for individuality and uniqueness in his choices.</li>
                    <li><strong>"And that has made all the difference":</strong> Suggests that the choice has had a significant impact on the speaker’s life, though the nature of the difference is open to interpretation.</li>
                </ul>
        
                <h3 class="text-2xl font-bold mb-3">Moral of the Poem</h3>
                <p class="mb-4">The moral of "The Road Not Taken" is to recognize the importance of making thoughtful and individual choices. While every decision leads to different outcomes, embracing your unique path can lead to personal growth and fulfillment. It also highlights that while we may wonder about the roads not taken, each choice we make shapes our own unique journey.</p>
        
                <h3 class="text-2xl font-bold mb-3">Conclusion</h3>
                <p class="mb-4">Robert Frost’s "The Road Not Taken" eloquently captures the essence of decision-making and its lasting impact on our lives. Through its rich imagery and thoughtful reflection, the poem encourages readers to value their own choices and understand that every path has its own significance. It serves as a reminder that our decisions, whether big or small, play a crucial role in defining who we are and where we end up.</p>
            `,
            "subject": "English",
            "difficulty": "Intermediate",
            "relatedChapters": ["The Fun They Had", "The Little Girl"]
        },
        
        
    ]
    // Add more subjects here
};

// Get chapter information from URL parameters
function getChapterFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const subject = urlParams.get('subject');
    const title = urlParams.get('chapter');
    
    if (!subject || !title) {
        window.location.href = 'index.html';
        return null;
    }

    const chapter = chaptersDatabase[subject]?.find(c => c.title === decodeURIComponent(title));
    if (!chapter) {
        window.location.href = 'index.html';
        return null;
    }

    return chapter;
}

// Load and display chapter content
function loadChapter() {
    const chapter = getChapterFromURL();
    if (!chapter) return;

    // Update page title
    document.title = `${chapter.title} - LearnBite`;

    // Update breadcrumbs
    document.getElementById('subjectBreadcrumb').textContent = chapter.subject;
    document.getElementById('chapterBreadcrumb').textContent = chapter.title;

    // Update chapter title and tags
    document.getElementById('chapterTitle').textContent = chapter.title;
    document.getElementById('subjectTag').textContent = chapter.subject;
    document.getElementById('difficultyTag').textContent = chapter.difficulty;

    // Update chapter content
    document.getElementById('chapterContent').innerHTML = chapter.content;

    // Load related chapters
    loadRelatedChapters(chapter);
}

// Load and display related chapters
function loadRelatedChapters(currentChapter) {
    const relatedChaptersContainer = document.getElementById('relatedChapters');
    relatedChaptersContainer.innerHTML = '';

    currentChapter.relatedChapters.forEach(relatedTitle => {
        const relatedChapter = chaptersDatabase[currentChapter.subject.toLowerCase()]?.find(
            c => c.title === relatedTitle
        );

        if (relatedChapter) {
            const chapterCard = document.createElement('div');
            chapterCard.className = 'bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors';
            chapterCard.innerHTML = `
                <h3 class="font-bold mb-2">${relatedChapter.title}</h3>
                <p class="text-sm text-gray-600 mb-2">Subject: ${relatedChapter.subject}</p>
                <a href="chapter.html?subject=${currentChapter.subject.toLowerCase()}&chapter=${encodeURIComponent(relatedChapter.title)}" 
                   class="text-teal-600 hover:text-teal-700 text-sm">Read more →</a>
            `;
            relatedChaptersContainer.appendChild(chapterCard);
        }
    });
}

// Initialize page
document.addEventListener('DOMContentLoaded', loadChapter);

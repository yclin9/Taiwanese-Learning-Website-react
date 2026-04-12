import TailoTable from "./TailoTable";

function Tailo({ num }) {
    if (num === 1) {
        return (
        <section className="main-part">
            <div className="content">
                <h2>1. Simple Vowels</h2>
                <p>
                Taiwanese contains six simple vowels, all other vowels are
                built by these six basic elements.
                </p>

                <TailoTable tailoType={"simple_vowels"} />

                <h2>2. Compound Vowels</h2>
                <p>
                After learning the six simple vowel, we can now combine
                them to build more complicated sounds.
                </p>

                <TailoTable tailoType={"compound_vowels"} />

                <h2>3. Nasal Vowels</h2>
                <p>
                Next, lets move on to nasal vowels. The four vowels in the
                following table can be added to the vowels mentioned in
                the previous two parts.
                </p>

                <TailoTable tailoType={"nasal_vowels"} />

                <p>
                Among the four nasal vowels, three of the sounds exist in
                English. It is worth to noting the other vowel <i>-nn</i>.
                Pronounced the vowels and add a nasal sound on it.
                </p>

                <h2>4. Plosive Vowels</h2>
                <p>
                The plosive vowel is usually the part English speakers
                find post difficult. The plosive vowels are pronounced
                shorter and make the mouth shapes are different than the
                normal one.
                </p>

                <TailoTable tailoType={"plosive_vowels"} />
            </div>
        </section>
        );
    } else if (num === 2) {
        <></>
    } else if (num === 3) {
        <></>
    }
}

export default Tailo;
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
        return (
            <section className="main-part">
                <div className="content">
                    <h2>1. Overview</h2>
                    <p>
                        The consonants in Taiwanese is much simpler than vowels.
                        There are only 17 of them, representing 21 different
                        sounds. The following first 13 of the consonants:
                    </p>

                    <TailoTable tailoType={"consonants_first_half"} />

                    <h2>2. <i>b</i> vs. <i>p</i></h2>
                    <p>
                        Each of the consonant in the table above represents one sound.
                        Most of sounds shouldn't be difficult for English speakers,
                        except the two following pairs.
                        The difference between <i>p</i> and <i>b</i> is sometimes confusing,
                        the sound of <i>p</i> is basically equivalent to the sound
                        of <b>p</b> in <b>spin</b> in English.
                        The sound <i>b</i>, on the other hand, doesn't exist in English,
                        it is similar to the sound of <b>b</b> in Spanish (if that helps ^^).
                        Use more voicing (make your lips vibrate more) than <i>p</i>.
                    </p>

                    <h2>3. <i>k</i> vs. <i>g</i></h2>

                    <p>
                        The relationship between <i>k</i> and <i>g</i> is very similar
                        of the relationship between <i>p</i> and <i>b</i>. The sound
                        <i>k</i> is equivalent to <b>k</b> in <b>skill</b>, while 
                        <i>g</i> is like a harder version of <i>k</i>.
                    </p>

                    <h2>4. <i>ts</i> vs. <i>tsh</i> vs. <i>s</i> vs. <i>j</i></h2>
                    <p>
                        Move on to the last four consonants. Each of the consonant
                        have two different sounds when different vowels are added
                        after it. Check the following table:
                    </p>

                    <TailoTable tailoType={"consonants_second_half"} />

                    <p>
                        For the four letters, the pronounciations are different
                        when <i>i</i> comes after it. Otherwise, the sounds of the consonants
                        are consistent.
                    </p>
                </div>
            </section>
        )
    } else if (num === 3) {
        return (
            <section className="main-part">
                <div className="content">
                    <h2>1. Overview</h2>
                    <p>
                        The tones might be one of the hardest part when learning
                        Taiwanese. The content of tones doesn't really exist in
                        most of the European languages like English, French, and
                        Spanish. However, please don't panic and think that you
                        will never master it, useful tips will soonly be introduces
                        to help you understand Taiwanese tones in a simpler way.
                    </p>

                    <p>
                        There are originally 8 tones in Southern Min/Hokkien, However,
                        the 6th tone doesn't exist anymore in Taiwanese dialect. Take a
                        look at the table:
                    </p>

                    <table className="table">
                        <thead>
                            <tr>
                                <th>Tone</th>
                                <th>Symbol</th>
                                <th>Pitch</th>
                                <th>Example</th>
                                <th>Audio</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>o</td>
                                <td>55</td>
                                <td>東 tong</td>
                                <td>
                                    <audio preload="none" src={`/1.m4a`} controls></audio>
                                </td>
                            </tr>
                            
                            <tr>
                                <td>2</td>
                                <td>ó</td>
                                <td>51</td>
                                <td>黨 tóng</td>
                                <td>
                                    <audio preload="none" src={`/2.m4a`} controls></audio>
                                </td>
                            </tr>
                            
                            <tr>
                                <td>3</td>
                                <td>ò</td>
                                <td>31</td>
                                <td>東 tòng</td>
                                <td>
                                    <audio preload="none" src={`/3.m4a`} controls></audio>
                                </td>
                            </tr>
                            
                            <tr>
                                <td>4</td>
                                <td>o</td>
                                <td>33 (plosive)</td>
                                <td>督 tok</td>
                                <td>
                                    <audio preload="none" src={`/4.m4a`} controls></audio>
                                </td>
                            </tr>
                            
                            <tr>
                                <td>5</td>
                                <td>o</td>
                                <td>24</td>
                                <td>同 tông</td>
                                <td>
                                    <audio preload="none" src={`5.m4a`} controls></audio>
                                </td>
                            </tr>
                            
                            <tr>
                                <td>6</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                            
                            <tr>
                                <td>7</td>
                                <td>ō</td>
                                <td>33</td>
                                <td>洞 tōng</td>
                                <td>
                                    <audio preload="none" src={`/7.m4a`} controls></audio>
                                </td>
                            </tr>
                            
                            <tr>
                                <td>8</td>
                                <td>o̍</td>
                                <td>55 (plosive)</td>
                                <td>毒 to̍k</td>
                                <td>
                                    <audio preload="none" src={`/8.m4a`} controls></audio>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <h2>2. Sing the language!</h2>
                    <p>
                        The concept of tones is sometimes abstract for people whose
                        first language doesn't have tones. However, it is easier than
                        you think! Just imagine that you are singsing the language
                        instead of speaking the language. As can be seen in the table,
                        the pitch of the tones is devided into 1, 2, 3, 4, and 5.
                        Consider those number as five different pitches, 
                    </p>

                    <h2>3. Tone 4 and tone 8</h2>
                    <p>
                        You might have noticed tone 4 and tone 8 are quite different
                        from the other tones. This is because they are plosive vowels.
                        If a character has a plosive vowel, its pitch can only be 33
                        or 55, that is tone 4 or tone 8. Tone 4 has the same pitch 7,
                        and tone 8 has the same pitch as 1.
                    </p>

                    <h2>4. Tone sandhi</h2>
                    <p>
                        Yes, tone sandhi (change of the tones) does occur in Taiwanese
                        and is much more complex than other tonal languages like
                        Mandarin, Cantonese, and Thai. The idea of tone sandhi in in
                        Taiwanese is that the tones have to be changed except the last
                        characters of the word. The tone sandhi rules are slightly
                        different in different Southern Min dislects. Therefore, I
                        would recommend just to remember the three following rules:
                        (1) 5→7→3→2→1→7 (2) 4↔8 (3) 4→2; 8→3. The following graph is
                        for reference, the characters 漳 and 泉 are two different dialects.
                    </p>

                    <img src="src/assets/tone_sandhi.png" width="100%" alt="tone sandhi"></img>
                </div>
            </section>
        )
    }
}

export default Tailo;
function analyzeResults() {
    const form = document.getElementById('mbti-form');
    const resultDiv = document.getElementById('results');
    const resultText = document.getElementById('result-text');
    
    const answers = {
        E: 0,
        I: 0,
        S: 0,
        N: 0,
        T: 0,
        F: 0,
        J: 0,
        P: 0
    };

    // Collect answers from the form
    for (let i = 1; i <= 15; i++) {
        const answer = form.querySelector(`#q${i}`).value;
        answers[answer] = (answers[answer] || 0) + 1;
    }

    // Determine MBTI type
    const eOrI = answers.E > answers.I ? 'E' : 'I';
    const sOrN = answers.S > answers.N ? 'S' : 'N';
    const tOrF = answers.T > answers.F ? 'T' : 'F';
    const jOrP = answers.J > answers.P ? 'J' : 'P';

    const mbtiType = `${eOrI}${sOrN}${tOrF}${jOrP}`;

    // Define mortgage questions based on MBTI type
    const mortgageQuestions = {
        // Add all MBTI types and their corresponding questions
        //ESTJ
        'ESTJ': '<ol><li>Provide Organized Information: Offer wellorganized and clear information with practical benefits and structured options.</li> <li>                                                                                                               Be Efficient and ResultsOriented: Focus on efficiency and the results of the mortgage options.</li><li>                                                                                                                        Respect Their DecisionMaking Style: Provide clear, actionable options and support their decisionmaking process.</li> <li>         Emphasize Practical Benefits: Highlight the practical advantages and reliability of the mortgage options. </li> <li>          Offer Timely Updates: Keep them informed with regular, timely updates and progress reports. </li> <li>                           Be Direct and Honest: Communicate directly and honestly about all aspects of the mortgage options.</li> </ol>',

        //ENTJ
        'ENTJ': '<ol><li>Present Strategic Solutions: Offer highlevel, strategic mortgage options with clear benefits and longterm advantages. </li> <li>       Be Efficient and Decisive: Ensure a streamlined and efficient process with decisive actions. </li> <li>       Provide Comprehensive Analysis: Supply detailed analysis and insights to support their strategic decisionmaking. </li> <li>       Respect Their Leadership Style: Allow them to take charge of the decisionmaking process and provide support as needed.  </li> <li>      Discuss Future Implications: Focus on how the mortgage fits into their longterm plans and strategic goals.   </li> <li>     Offer HighQuality Service: Provide topnotch service and professionalism to meet their high standards.</li> </ol>',

        //ESFJ
        'ESFJ': '<ol><li>Build Personal Relationships: Focus on building a strong personal relationship and showing genuine care for their needs.    </li> <li>    Emphasize Community Impact: Discuss how the mortgage options benefit their family and community.   </li> <li>     Provide Clear Benefits: Clearly outline the positive aspects and benefits of the mortgage options.  </li> <li>      Offer Support and Reassurance: Provide reassurance and support throughout the mortgage process.  </li> <li>      Be Responsive and Attentive: Be responsive to their needs and attentive to their concerns.   </li> <li>     Create a Positive Experience: Ensure a positive and pleasant experience throughout the process.</li> </ol>',

        //ENFJ
        'ENFJ': '<ol><li>Discuss Broader Impact: Highlight how the mortgage aligns with their broader life goals and societal impact.  </li> <li>      Provide Support and Encouragement: Offer ongoing support and encouragement throughout the mortgage process.    </li> <li>    Build Strong Connections: Establish a strong connection and show genuine interest in their longterm goals. </li> <li>       Offer Visionary Solutions: Present options that align with their vision for the future and personal growth.   </li> <li>     Be Empathetic and Understanding: Show empathy and understanding of their personal and emotional needs.     </li> <li>   Encourage Positive Outcomes: Focus on the positive outcomes and benefits of the mortgage options.</li> </ol>',

        //ISTJ
        'ISTJ': '<ol><li>Provide Detailed Documentation: Offer comprehensive, organized information with all necessary details and data.    </li> <li>   Follow a Structured Process: Ensure a clear, stepbystep process for the mortgage application and approval.Be Punctual and Reliable: Respect their time by being prompt and dependable in all communications. </li> <li>        Focus on Facts and Logic: Present information in a logical manner, focusing on facts and data rather than emotions.  </li> <li>       Offer Clear Deadlines: Provide specific deadlines and ensure that all timelines are met.</li> <li>         Prepare for Questions: Anticipate their detailed questions and be ready with thorough answers and explanations.</li> </ol>',

        //ISFJ
        'ISFJ': '<ol><li>Personalize Your Approach: Take the time to understand their personal circumstances and tailor your recommendations accordingly.    </li> <li>    Highlight Stability and Security: Emphasize how the mortgage options provide stability and security for their future.   </li> <li>     Build Trust and Rapport: Establish a strong personal connection and demonstrate empathy and understanding. </li> <li>       Provide Clear, StepbyStep Guidance: Offer clear instructions and support throughout the mortgage process.   </li> <li>     Address Emotional Concerns: Be attentive to any emotional concerns they might have about the mortgage decision.  </li> <li>      Follow Up Regularly: Check in frequently to ensure they feel supported and address any issues promptly.</li> </ol>',

        //INTJ
        'INTJ': '<ol><li>Present Strategic Options: Offer wellresearched, strategic mortgage options with detailed analysis and projections.  </li> <li>      Be Efficient and Direct: Communicate information clearly and concisely, avoiding unnecessary details.   </li> <li>     Provide Independent Resources: Offer resources that allow them to conduct their own research and analysis.    </li> <li>    Respect Their Need for Autonomy: Allow them to make decisions independently and provide support as needed.   </li> <li>     Discuss LongTerm Implications: Focus on the longterm impact and strategic benefits of the mortgage options.   </li> <li>     Prepare for Analytical Questions: Be ready to answer complex questions and provide indepth explanations.</li> </ol>',

        //INFJ
        'INFJ': '<ol><li>Align with Their Values: Discuss how the mortgage aligns with their personal values and longterm goals.  </li> <li>      Offer a Visionary Perspective: Provide insights into how the mortgage fits into their broader life vision and aspirations.    </li> <li>    Show Empathy and Understanding: Demonstrate genuine concern for their personal situation and how it impacts their future.   </li> <li>     Provide Personalized Recommendations: Tailor your suggestions to fit their unique circumstances and goals.   </li> <li>     Create a Comfortable Environment: Ensure they feel comfortable sharing their thoughts and concerns with you.   </li> <li>     Be Patient and Supportive: Give them time to process information and make decisions, and offer ongoing support throughout.</li> </ol>',

        //ESTP
        'ESTP': '<ol><li>Offer Practical Solutions: Provide practical, actionable mortgage options with immediate benefits.  </li> <li>      Be Flexible and Adaptable: Allow for adjustments and be open to changes as their needs evolve.   </li> <li>     Present Information Clearly: Use straightforward, easytounderstand language to explain options. </li> <li>       Provide HandsOn Assistance: Offer practical help and support with the application process.    </li> <li>    Avoid Overcomplication: Keep the process simple and avoid unnecessary complexity. </li> <li>       Respect Their Need for Action: Provide quick, actionable steps and avoid unnecessary delays.</li> </ol>',

        //ESFP
        'ESFP': '<ol><li>Use Engaging Presentations: Incorporate dynamic and visually appealing presentations to explain mortgage options.   </li> <li>     Highlight Personal Benefits: Emphasize how the mortgage will enhance their lifestyle and personal enjoyment.  </li> <li>      Create a Positive Atmosphere: Ensure a fun, engaging environment for discussions. </li> <li>       Be Responsive to Their Needs: Pay attention to their preferences and adapt your approach accordingly.  </li> <li>      Provide Flexibility: Offer flexible options that allow for personal preferences and changes.     </li> <li>   Show Enthusiasm and Support: Be enthusiastic and supportive throughout the process.</li> </ol>',

        //ENTP
        'ENTP': '<ol><li>Present Innovative Solutions: Offer creative and unconventional mortgage options that spark their interest.   </li> <li>     Encourage Debate and Discussion: Engage in lively discussions and explore various viewpoints and possibilities.   </li> <li>     Provide Detailed Analysis: Offer thorough analysis and insights to support their decisionmaking.    </li> <li>    Be Flexible and Adaptive: Be open to changing and adapting solutions based on their feedback.    </li> <li>    Respect Their Need for Autonomy: Allow them to make decisions independently and provide information as needed.   </li> <li>     Be Prepared for Intellectual Challenges: Anticipate and address complex questions and ideas with detailed explanations.</li> </ol>',

        //ENFP
        'ENFP': '<ol><li>Discuss Visionary Goals: Highlight how the mortgage aligns with their longterm dreams and creative aspirations.    </li> <li>    Offer Flexible Options: Provide various flexible options to explore and adapt as needed.   </li> <li>     Encourage Exploration: Allow them the freedom to explore different possibilities and options.  </li> <li>      Show Empathy and Understanding: Demonstrate empathy for their personal and emotional needs. </li> <li>       Provide Creative Solutions: Offer innovative and creative mortgage options that align with their vision.     </li> <li>   Support Their DecisionMaking: Provide support and encouragement as they explore and make decisions.</li> </ol>',
        
        //ISTP
        'ISTP': '<ol><li>Offer Practical Solutions: Provide straightforward, actionable mortgage options that address immediate needs.     </li> <li>   Be Flexible and Adaptable: Allow for adjustments and be open to changes as their needs evolve.    </li> <li>    Present Information Clearly: Use clear and concise language to explain mortgage details and options.    </li> <li>    Provide HandsOn Assistance: Offer practical help and support with the application process.     </li> <li>   Avoid Overcomplication: Keep the process simple and avoid unnecessary complexity.   </li> <li>     Respect Their Independence: Give them space to make decisions on their own and provide assistance as needed.</li> </ol>',

        //ISFP
'ISFP': '<ol><li>Use Visual and Sensory Aids: Incorporate visual aids and easytounderstand materials to present mortgage options.  </li> <li>      Highlight Personal Impact: Emphasize how the mortgage will enhance their personal lifestyle and comfort. </li> <li> Provide a Relaxed Atmosphere: Create a comfortable and informal environment for discussions.   </li> <li>     Show Genuine Care: Demonstrate genuine interest in their personal needs and preferences.</li> <li>        Offer Flexible Options: Provide flexible mortgage options that allow for personal preferences and adjustments. </li> <li>       Be Attentive to Their Preferences: Pay attention to their preferences and incorporate them into your recommendations.</li> </ol>',

//INTP
'INTP': '<ol><li>Provide Analytical Data: Offer detailed analytical data and comparisons to support their decisionmaking process.   </li> <li>     Encourage Intellectual Exploration: Engage them in discussions and explorations of various mortgage options.    </li> <li>    Be Prepared for InDepth Questions: Anticipate and address complex questions with thorough explanations.    </li> <li>    Respect Their Need for Autonomy: Allow them to make decisions independently and provide detailed information as needed.   </li> <li>     Present Multiple Perspectives: Offer various viewpoints and insights to help them make a wellinformed decision.  </li> <li>      Be Open to Theoretical Discussions: Engage in discussions about the theoretical implications of different mortgage options.</li> </ol>',

        //INFP
        'INFP': '<ol><li>Align with Their Values and Dreams: Discuss how the mortgage fits with their personal values and longterm dreams.      </li> <li> Provide Creative Solutions: Offer innovative and flexible options that allow for personal expression and growth. </li> <li>       Be Supportive and Encouraging: Show understanding and encouragement as they explore different options.   </li> <li>     Allow for Exploration: Give them space to explore various possibilities and options.    </li> <li>    Show Empathy: Demonstrate empathy and understanding of their personal circumstances and aspirations. </li> <li>       Provide Insight into Future Impact: Help them understand how the mortgage will impact their future goals and life vision.</li> </ol>',

        // Add more MBTI types and questions as needed
        // Add other types...
    };

    if (mortgageQuestions[mbtiType]) {
        resultText.innerHTML = mortgageQuestions[mbtiType];
        resultDiv.classList.remove('hidden');
    } else {
        resultText.innerHTML = "No recommendations available for your MBTI type.";
        resultDiv.classList.remove('hidden');
    }
}

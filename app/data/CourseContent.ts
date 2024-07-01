interface CourseData {
  course: {
    title: string;
    description: string;
    learningObjectives?: string[]; // Optional array of strings
    resources?: { [key: string]: string }; // Optional object with string keys and string values
  };
  chapters: Chapter[];
}

interface Chapter {
  title: string;
  content: string;
  estimatedTime: number; // Minutes
  topics: Topic[];
  chapterQuiz?: ChapterQuiz; // Optional chapter-level quiz
}

interface Topic {
  title: string;
  content: string | string[]; //string or array of content
  learningObjectives?: string[]; // Optional array of strings
  resources?: { [key: string]: string }; // Optional object with string keys and string values
  quiz?: Quiz; // Optional quiz for the topic
}

interface Quiz {
  title: string;
  questions: Question[];
}

interface Question {
  type: string; // e.g., "multiple_choice", "true_false", "essay"
  text: string;
  choices?: string[]; // Optional array of strings for multiple-choice questions
  answer: number; // Index of the correct answer (for multiple choice) or boolean (for true/false)
  feedback?: string; // Optional explanation for the correct answer
}

interface ChapterQuiz {
  title: string;
  questions: Question[];
}

export const Chapter = {
  course: {
    title: "Civic Education",
    description: "T.",
    learningObjectives: [
      "Understand basic programming concepts",
      "Learn to write simple programs",
      "Get familiar with a programming language",
    ],
    resources: {
      syllabus: "https://example.com/syllabus.pdf",
      additionalReading: "https://example.com/reading-materials",
    },
  },
  chapters: [
    {
      title: "## Chapter 1: Why Vote?",
      content:
        "Introduction to **Democracy and its principles**,the Power of Your Vote,how it shapes the future of South Sudan,benefits of Citizen Participation: Holding leaders accountable, promoting peace and development.",
      "estimatedTime.This content sets the foundation by introducing the concepts of democracy, the importance of voting, and the benefits of citizen participation. It aims to inspire and empower learners to recognize the significance of their role in the democratic process.\n\n": 60,
      topics: [
        {
          title: "### 1.1 What is Democracy?",
          content:
            "**Understanding Democracy:** \n\n   Democracy is a form of government where power ultimately lies in the hands of the people. The term 'democracy originates from the Greek words 'demos', meaning 'people', and 'kratos', meaning 'power' or 'rule'. Essentially, democracy translates to 'rule by the people.' This system ensures that citizens have a say in the decisions that affect their lives through mechanisms such as voting, representation, and civic participation.\n\n  \n\n   **Key Principles of Democracy:** \n\n \n\n 1. **Rule of Law:** The rule of law is a foundational principle of democracy. It ensures that all individuals, institutions, and entities, public and private, including the state itself, are accountable to laws that are publicly promulgated, equally enforced, and independently adjudicated. This principle safeguards against arbitrary governance and ensures that justice is applied equally, maintaining order and protecting citizens' rights",
          learningObjectives: ["", ""],
          resources: {
            tutorial: "",
          },
          quiz: {
            title: "Topic 1 Quiz",
            questions: [
              {
                type: "multiple_choice",
                text: "What are the core principles of democracy?",
                choices: [
                  "Equality, freedom, and participation",
                  "Power, control, and authority",
                  "Wealth, privilege, and status",
                  "Exclusivity, hierarchy, and elitism",
                ],
                answer: 0,
                feedback:
                  "The core principles of democracy include equality, freedom, and participation. These principles ensure that all citizens have equal rights, freedoms, and opportunities to participate in the democratic process.",
              },
              {
                type: "multiple_choice",
                text: "Why is voting important in a democracy?",
                choices: [
                  "It ensures the government represents the will of the people.",
                  "It consolidates power in the hands of a few elites.",
                  "It perpetuates inequality and discrimination.",
                  "It undermines the rule of law and order.",
                ],
                answer: 0,
                feedback:
                  "Voting is important in a democracy because it ensures that the government represents the will of the people. By participating in elections, citizens have a say in who governs them and the policies that are implemented, thereby shaping the direction of the country.",
              },
              {
                type: "multiple_choice",
                text: "How does citizen participation benefit society?",
                choices: [
                  "By holding leaders accountable and promoting peace and development.",
                  "By maintaining the status quo and preserving the interests of the elite.",
                  "By excluding marginalized communities and perpetuating inequality.",
                  "By limiting access to resources and opportunities for the majority.",
                ],
                answer: 0,
                feedback:
                  "Citizen participation benefits society by holding leaders accountable and promoting peace and development. When citizens actively engage in the democratic process through voting and other civic activities, they ensure that elected officials are responsive to the needs and concerns of the people, leading to greater transparency, trust, and stability in society.",
              },
            ],
          },
        },
        {
          title:
            "Topic 2: The Power of Your Vote: How it Shapes the Future of South Sudan",
          content:
            "Your vote is your voice in the democratic process. By casting your ballot, you contribute to the selection of leaders and policies that will shape the future of South Sudan. Each vote carries significance in determining the direction of the country and influencing decisions on issues such as governance, public services, and economic development.",
          learningObjectives: ["", ""],
          resources: {
            tutorial: "",
          },
          quiz: {
            title: "Topic 2 Quiz",
            questions: [
              {
                type: "multiple_choice",
                text: "What role does voting play in shaping the future of South Sudan?",
                choices: [
                  "It has no impact on the future of South Sudan.",
                  "It helps in shaping policies and selecting leaders who represent the interests of the people.",
                  "It ensures that only certain groups benefit from government policies.",
                  "It creates divisions and conflicts within society.",
                ],
                answer: 1,
                feedback:
                  "Voting plays a crucial role in shaping the future of South Sudan by allowing citizens to have a say in policies and selecting leaders who represent their interests. Through voting, citizens contribute to the democratic process, ensuring that the government reflects the will of the people and works towards the common good.",
              },
              {
                type: "multiple_choice",
                text: "What is one benefit of active citizen participation in elections?",
                choices: [
                  "Increased corruption and mismanagement of public funds.",
                  "Decreased accountability of elected officials.",
                  "Improved transparency and responsiveness of government.",
                  "Exclusion of certain groups from the political process.",
                ],
                answer: 2,
                feedback:
                  "One benefit of active citizen participation in elections is improved transparency and responsiveness of government. When citizens actively engage in the electoral process by voting and holding elected officials accountable, it fosters a culture of transparency and accountability, leading to better governance and decision-making.",
              },
            ],
          },
        },
        {
          title:
            "Topic 3: Benefits of Citizen Participation: Holding Leaders Accountable, Promoting Peace and Development",
          content:
            "Active citizen participation is essential for holding leaders accountable and promoting peace and development. When citizens engage in the democratic process through activities like voting, advocacy, and community involvement, they can hold elected officials accountable for their actions and decisions. Additionally, citizen participation fosters a sense of ownership and responsibility for the well-being of the nation, leading to greater stability and progress.",
            
          learningObjectives: ["", ""],
          resources: {
            tutorial: "",
          },
          quiz: {
            title: "Topic 3 Quiz",
            questions: [
              {
                type: "multiple_choice",
                text: "What is one benefit of active citizen participation in elections?",
                choices: [
                  "Increased corruption and mismanagement of public funds.",
                  "Decreased accountability of elected officials.",
                  "Improved transparency and responsiveness of government.",
                  "Exclusion of certain groups from the political process.",
                ],
                answer: 2,
                feedback:
                  "One benefit of active citizen participation in elections is improved transparency and responsiveness of government. When citizens actively engage in the electoral process by voting and holding elected officials accountable, it fosters a culture of transparency and accountability, leading to better governance and decision-making.",
              },
            ],
          },
        },
      ],
    },
    {
      title: "Chapter 2:  **Understanding the Electoral Process**",
      content:
        "",
      estimatedTime:"60",
      topics: [
        {
          title: " Topic 1: Types of Elections in South Sudan",
          content:
            "South Sudan conducts various types of elections, including **national**, **state**, and **local elections**. National elections determine the leadership at the national level, including the president and members of the national legislature. \n\n State elections are held to elect governors and members of state legislatures, while local elections focus on municipal and county-level positions. Each type of election plays a crucial role in shaping governance and representation at different levels of government.",
          learningObjectives: ["", ""],
          resources: {
            tutorial: "",
          },
          quiz: {
            title: "Topic 1 Quiz",
            questions: [
              
                  { "type": "multiple_choice",
                    "text": "What types of elections are held in South Sudan?",
                    "choices": [
                      "National, regional, and district elections",
                      "National, state, and local elections",
                      "Presidential, parliamentary, and municipal elections",
                      "Primary, runoff, and general elections"
                    ],
                    "answer": 1,
                    "explanation": "South Sudan conducts national, state, and local elections. National elections determine the leadership at the national level, while state and local elections focus on regional and municipal positions."
                  },
                              
             
            ],
          },
        },
        {
          title:
            "Topic 2: Key Players: The South Sudan National Elections Commission (NEC) and Other Stakeholders",
          content:
            "The South Sudan National Elections Commission (NEC) is the independent body responsible for organizing and overseeing elections in the country. The NEC ensures that elections are conducted fairly, transparently, and in accordance with the law. Other stakeholders involved in the electoral process include political parties, candidates, civil society organizations, and international observers. These stakeholders play various roles in promoting free and fair elections and safeguarding the integrity of the electoral process.",
          learningObjectives: ["", ""],
          resources: {
            tutorial: "",
          },
          quiz: {
            title: "Topic 2 Quiz",
            questions: [
              { "type": "multiple_choice",
                "text": "Who is responsible for organizing and overseeing elections in South Sudan?",
                "choices": [
                  "The President of South Sudan",
                  "The South Sudan National Elections Commission (NEC)",
                  "The United Nations",
                  "International non-governmental organizations (NGOs)"
                ],
                "answer": 1,
                "explanation": "The South Sudan National Elections Commission (NEC) is responsible for organizing and overseeing elections in the country. It ensures that elections are conducted fairly, transparently, and in accordance with the law."
              },
              { "type": "multiple_choice",
                "text": "What measures are taken to ensure the integrity of the electoral process?",
                "choices": [
                  "Strict enforcement of voter ID requirements",
                  "Deployment of international peacekeeping forces",
                  "Use of electronic voting machines",
                  "Implementation of transparent and fair election procedures"
                ],
                "answer": 3,
                "explanation": "To ensure the integrity of the electoral process, measures such as implementing transparent and fair election procedures are taken. This includes ensuring equal access to polling stations, preventing voter intimidation, and providing mechanisms for monitoring and reporting electoral irregularities."
              },
              {  "type": "multiple_choice",
                "text": "What is the significance of international observers in elections?",
                "choices": [
                  "To provide financial support to election candidates",
                  "To ensure that only certain individuals can vote in elections",
                  "To oversee and monitor the electoral process for fairness and transparency",
                  "To enforce election laws and regulations"
                ],
                "answer": 2,
                "explanation": "The significance of international observers in elections is to oversee and monitor the electoral process for fairness and transparency. They assess whether elections are conducted in accordance with international standards and provide independent assessments of the credibility of the electoral process."
              },
              { "type": "multiple_choice",
                "text": "What is the purpose of election monitoring?",
                "choices": [
                  "To manipulate election results in favor of certain candidates",
                  "To ensure the safety and security of polling stations",
                  "To oversee and assess the fairness of the electoral process",
                  "To restrict access to polling stations"
                ],
                "answer": 2,
                "explanation": "The purpose of election monitoring is to oversee and assess the fairness of the electoral process. Election monitors observe various aspects of the electoral process, including voter registration, campaigning, voting, and vote counting, to ensure that elections are conducted transparently and in accordance with democratic principles."
              },
              
              
            ],
          },
        },
        {
          title:
            "Topic 3: Voter Registration Process: Eligibility, Registration Procedures, and Locations",
          content:
            "Voter registration is a crucial step in the electoral process, as it determines who is eligible to vote in elections. Eligible voters must register with the NEC to receive a voter registration card, which allows them to cast their votes on election day. The registration process typically involves providing proof of identity and residency, such as a national ID card or passport, and may require individuals to visit designated registration centers in their area. The NEC ensures that voter registration is accessible to all eligible citizens and takes measures to prevent fraud and manipulation..",
          learningObjectives: ["", ""],
          resources: {
            tutorial: "",
          },
          quiz: {
            title: "Topic 3 Quiz",
            questions: [
              { "type": "multiple_choice",
                "text": "What is the purpose of voter registration in the electoral process?",
                "choices": [
                  "To determine who is eligible to run for political office",
                  "To ensure that only certain individuals can vote in elections",
                  "To provide voters with information about candidates and parties",
                  "To identify and register eligible voters for participation in elections"
                ],
                "answer": 3,
                "explanation": "The purpose of voter registration is to identify and register eligible voters for participation in elections. It ensures that individuals who meet the eligibility criteria are provided with voter registration cards, allowing them to cast their votes on election day."
              },
              { "type": "multiple_choice",
                "text": "What role do political parties play in the electoral process?",
                "choices": [
                  "They oversee the voter registration process",
                  "They provide financial support to election candidates",
                  "They nominate candidates to run for political office",
                  "They enforce election laws and regulations"
                ],
                "answer": 2,
                "explanation": "Political parties play a key role in the electoral process by nominating candidates to run for political office. They represent different ideologies, policies, and interests, providing voters with a choice of candidates to vote for in elections."
              },
              { "type": "multiple_choice",
                "text": "What are the consequences of electoral fraud?",
                "choices": [
                  "Increased trust in the electoral process",
                  "Decreased voter turnout in future elections",
                  "Enhanced accountability of government leaders",
                  "Undermining the credibility and legitimacy of election results"
                ],
                "answer": 3,
                "explanation": "The consequences of electoral fraud include undermining the credibility and legitimacy of election results. Electoral fraud erodes public trust in the electoral process, leading to decreased confidence in the fairness and integrity of elections and potentially triggering unrest and instability."
              },
              { "type": "multiple_choice",
                "text": "What role does voter education play in the electoral process?",
                "choices": [
                  "To prevent certain individuals from voting",
                  "To provide voters with information about the candidates and parties",
                  "To ensure that only certain individuals can vote in elections",
                  "To identify and register eligible voters for participation in elections"
                ],
                "answer": 1,
                "explanation": "Voter education plays a crucial role in the electoral process by providing voters with information about the candidates and parties. It helps voters make informed decisions at the polls by raising awareness about the electoral process, voting procedures, and the importance of civic participation."
              },
              
            ],
          },
        },
        {
          title:
            "Topic 4: Encouraging Voter Turnout and the Role of Media in Elections",
          content:
          [
            "***Elections*** are the <strong>cornerstone</strong> of democratic societies, representing the voice of the people in choosing their leaders. However, achieving high voter turnout is a challenge faced by many countries. Two critical strategies to address this issue are enhancing accessibility to polling stations and providing unbiased media coverage of election campaigns and candidates.One of the most effective ways to increase voter turnout is by ensuring that polling stations are easily accessible to all citizens. This involves establishing polling stations in convenient locations, such as near schools, community centers, or other public places.",
             "Additionally, providing transportation assistance to voters, especially those in rural areas or with mobility challenges, can significantly boost participation rates. Offering extended voting hours also accommodates different schedules, making it easier for working individuals and families to vote. Media plays a pivotal role in shaping public opinion and informing voters about the candidates and issues at stake. Unbiased media coverage is essential for a healthy democracy, as it allows voters to make informed decisions based on accurate and balanced information. Reporting on campaign events, candidate platforms, and voter opinions helps voters understand the nuances of each candidate's position and the implications of their policies. ",
             "Furthermore, media outlets can play a significant role in encouraging public discourse and debate about election issues, fostering a more engaged and informed electorate.In conclusion, enhancing accessibility to polling stations and providing unbiased media coverage are two key strategies that can significantly increase voter turnout and strengthen democratic processes. By making voting more accessible and ensuring that voters have the information they need to make informed decisions, we can foster a more engaged and participatory democracy.",
             "",
          ],
          learningObjectives: ["", ""],
          resources: {
            tutorial: "",
          },
          quiz: {
            title: "Topic 4 Quiz",
            questions: [
              
              { "type": "multiple_choice",
                "text": "What measures can be taken to encourage voter turnout in elections?",
                "choices": [
                  "Imposing strict penalties for non-voters",
                  "Enhancing accessibility to polling stations",
                  "Limiting voting hours to a shorter duration",
                  "Restricting access to information about the candidates"
                ],
                "answer": 1,
                "explanation": "To encourage voter turnout in elections, measures such as enhancing accessibility to polling stations can be taken. This includes establishing polling stations in convenient locations, providing transportation assistance to voters, and offering extended voting hours to accommodate different schedules."
              },
              { "type": "multiple_choice",
                "text": "What is the role of the media in elections?",
                "choices": [
                  "To manipulate election results in favor of certain candidates",
                  "To provide unbiased coverage of election campaigns and candidates",
                  "To restrict access to information about the candidates",
                  "To limit public discourse and debate about election issues"
                ],
                "answer": 1,
                "explanation": "The role of the media in elections is to provide unbiased coverage of election campaigns and candidates. This includes reporting on campaign events, candidate platforms, and voter opinions, allowing voters to make informed decisions at the polls based on accurate and balanced information."
              }
              
              
            ],
          },
        },
      ],
    },
   
  ],
};

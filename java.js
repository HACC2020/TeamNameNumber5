document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("input")
  inputField.addEventListener("keydown", function(e) {
    if (e.code === "Enter") {
      let input = inputField.value;
      inputField.value = "";
      output(input);
    }
  });
});

const question = [
  ["what is covid", "what is covid 19", "what is covid19"],
  ["do i need to self quarantine","do i need stay at home","do i need to self quarantine even if i dont have covid","do i need to self quarantine even if i dont have covid19","do i need to self quarantine even if i dont have covid-19"],
  ["how do i self quarantine","how to self quarantine",],
  ["what do i do if i need medical help while quarantined","how to get medical help","medical help in quarantine"],
  ["can someone in quarantine drive another person to get medical care","drive someone with covid","drive someone with covid19","drive someone with covid-19","can i drive someone with covid to "],
  ["how do i get food and other essentials"],
  ["can i break traveler quarantine to pick up medications that cannot be delivered"],
  ["what do i do if i need to care for someone else"],
  ["if i lived with others who did not travel do they need to quarantine also", "does my family also need to quarantine when i quarantine"],
  ["can i walk my pet while quarantined"],
  ["can i break quarantine if i do essential work"],
  ["how can i report someone breaking quarantine"],
  ["what is community spread"],
  ["can i get infected from packages or mail"],
  ["should i take extra percaussions if i where contacts"],
  ["what should i do if i or someone in my family gets sick"],
  ["can my child get covid","can my child get covid-19","can my child get covid19"],
  ["should kids wear masks"],
  ["how can i prepare for an outbreak","how to prepare","how to prepare for covid","how to prepare for covid19","how to prepare for covid-19","preparations for covid","preparations for covid19","preparations for covid-19"],
  ["what are the symptoms of covid","what are the symptoms of covid-19","symptoms of covid"],
  ["should i get tested","should i get tested for covid","should i get tested for covid-19","testing for covid","testing for covid19","testing for covid-19"],
];
  
const reply = [
  ["The Coronavirus Disease, also known as COVID-19, is a type of virus that spreads through mammals and birds, similar to the common cold. It is spread through saliva or nasal discharge (coughs or sneezes), so be sure to wash your hands and wear a mask!"],
  ["Quarantine is important to lessen the spread of COVID-19. Persons entering the State of Hawaii must quarantine for 14-days or the duration of their trip, whichever is shorter. This applies to visitors and residents arriving in Hawaii. Essential employees can submit an exemption request by visiting https://ag.hawaii.gov/travelexemption/ "],
  ["You must go directly from the airport to your self-identified quarantine location. Do not leave to get food or other supplies and do not have visitors over. Monitor yourself for symptoms of COVID-19 daily."],
  ["Call 9-1-1 for medical emergencies. Let the operator know your travel history and that you are in travel quarantine. For non-urgent medical care, contact your doctor to see if you can arrange a telehealth alternative or if you can postpone regular appointments until after your quarantine ends."],
  ["Call 9-1-1 for transport of persons needing emergency medical care.  For non-urgent medical care, contact your doctor to see if you can arrange a telehealth alternative or if you can postpone regular appointments until after your quarantine ends. Remember to wear a mask when going out."],
  ["Arrange for a friend or relative to drop off essentials or make use of a contactless delivery service. A list of delivery services operating in Hawaii can be found here."],
  ["No. Please consult with the prescribing physician on an alternative."],
  ["Please wait until your 14-day traveler quarantine period is over to leave your home to care for a loved one. If you are caring for someone within your home, you can do so provided you are monitoring your own health and not leaving the home for appointments and other errands. Please make other arrangements such as use of a paratransit service, taxi, or ride share to get your loved one to their appointments. If they are suffering from a medical emergency, call 9-1-1."],
  ["If you live with other people who are not subject to the travel quarantine, they do not need to quarantine. Only the traveler must quarantine. If you begin to experience symptoms of COVID-19 such as fever, cough, or shortness of breath, call your doctor. Based on a medical assessment, your household may need to self-quarantine. Remember, visitors should not be allowed at your shared residence until you complete your traveler quarantine."],
  ["No. If you have a private yard or lanai you may exercise your pet there. Do not break quarantine by leaving your property."],
  ["Those identified as essential workers by the Cybersecurity & Infrastructure Security Agency (CISA), see list here, or their employers should visit https://ag.hawaii.gov/travelexemption/ prior to travel for written authorization to break self-quarantine to perform their work."],
  ["For violations call local law enforcement on their non-emergency lines. On Oahu, call 808-723-3900 or email HPDcovidenforce@honolulu.gov; Maui County’s non-emergency line is (808) 244-6400 or email mpdquarantine@mpd.net; Hawaii County’s non-emergency line is (808) 935-3311; Kauai County offers online reporting at https://www.kauai.gov/KPD-Online-Reporting"],
  ["Community spread means people have been infected with the virus in an area, including some who are not sure how or where they became infected. Each health department determines community spread differently based on local conditions."],
  ["There is still a lot that is unknown about COVID-19 and how it spreads. Coronaviruses are thought to be spread most often by respiratory droplets. Although the virus can survive for a short period on some surfaces, it is unlikely to be spread from domestic or international mail, products or packaging. However, it may be possible that people can get COVID-19 by touching a surface or object that has the virus on it and then touching their own mouth, nose, or possibly their eyes, but this is not thought to be the main way the virus spreads."],
  ["Currently there is no evidence to suggest contact lens wearers are more at risk for acquiring COVID-19 than eyeglass wearers. Contact lens wearers should continue to practice safe contact lens wear and care hygiene habits to help prevent against transmission of any contact lens-related infections, such as always washing hands with soap and water before handling lenses. People who are healthy can continue to wear and care for their contact lenses as prescribed by their eye care professional."],
  ["Most people who get COVID-19 will be able to recover at home. CDC has directions for people who are recovering at home and their caregivers, including: Stay home when you are sick, except to get medical care. Use a separate room and bathroom for sick household members (if possible). Wash your hands often with soap and water for at least 20 seconds, especially after blowing your nose, coughing, or sneezing; going to the bathroom; and before eating or preparing food. If soap and water are not readily available, use an alcohol-based hand sanitizer with at least 60% alcohol. Always wash hands with soap and water if hands are visibly dirty. Provide your sick household member with clean disposable facemasks to wear at home, if available, to help prevent spreading COVID-19 to others. Clean the sick room and bathroom, as needed, to avoid unnecessary contact with the sick person. However, some people may need emergency medical attention. Watch for symptoms and learn when to seek emergency medical attention. When to Seek Emergency Medical Attention"],
  ["Children can be infected with the virus that causes COVID-19 and can get sick with COVID-19. Most children with COVID-19 have mild symptoms or they may have no symptoms at all (“asymptomatic”). Fewer children have been sick with COVID-19 compared to adults. However, children with certain underlying medical conditions and infants (less than 1 year old) might be at increased risk for severe illness from COVID-19. Some children have developed a rare but serious disease that is linked to COVID-19 called multisystem inflammatory syndrome (MIS-C)."],
  ["In general, children 2 years and older should wear a mask. However, CDC recognizes that wearing masks may not be possible in every situation or for some people. Appropriate and consistent use of masks may be challenging for some children, such as children with certain disabilities, including cognitive, intellectual, developmental, sensory and behavioral disorders. Learn more about what you should do if your child or you cannot wear masks in certain situations."],
  ["Create a household plan of action to help protect your health and the health of those you care about in the event of an outbreak of COVID-19 in your community: Talk with the people who need to be included in your plan, and discuss what to do if a COVID-19 outbreak occurs in your community. Plan ways to care for those who might be at greater risk for serious complications. Make sure they have access to 2 weeks of medications and supplies in case you need to stay home for prolonged periods of time. Get to know your neighbors and find out if your neighborhood has a website or social media page to stay connected. Create a list of local organizations that you and your household can contact in the event you need access to information, healthcare services, support, and resources. Create an emergency contact list of family, friends, neighbors, carpool drivers, health care providers, teachers, employers, the local public health department, and other community resources."],
  ["People with COVID-19 have reported a wide range of symptoms – from mild symptoms to severe illness. Symptoms may appear 2-14 days after exposure to the virus. If you have fever, cough, or other symptoms, you might have COVID-19."],
  ["Not everyone needs to be tested for COVID-19. However, if you have symptoms of COVID-19 or believe you might have COVID-19 and want to get tested, call your healthcare provider first. Most people will have mild illness and can recover at home without medical care and may not need to be tested. CDC has guidance for who should be tested, but decisions about testing are made by state and local health departments and healthcare providers. You can also visit your state or local health department’s website to look for the latest local information on testing."],
];

const tryAgain = [
  "I can't seem to understand what you are asking. If you need specific assistance, please visit https://hawaiicovid19.com or https://health.hawaii.gov/coronavirusdisease2019/ for more information.",
  "This maybe beyond what I can answer. Please try again, or visit https://hawaiicovid19.com or https://health.hawaii.gov/coronavirusdisease2019/ for COVID information.",
  "Uh oh, looks like I can't answer that as of now. If you'd like to find what your problem is, try visiting https://hawaiicovid19.com or https://health.hawaii.gov/coronavirusdisease2019/.",
];

function compare(questionArray, replyArray, text) {
  let item;
  for (let x = 0; x < questionArray.length; x++) {
    for (let y = 0; y < replyArray.length; y++) {
      if (questionArray[x][y] == text) {
        items = replyArray[x];
        item = items[Math.floor(Math.random() * items.length)];
      }
    }
  }
  return item;
}

function addChat(input, product) {
  const chatDiv = document.getElementById("chat");
  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.innerHTML = `You: <span id="user-response">${input}</span>`;
  chatDiv.appendChild(userDiv);

  let botDiv = document.createElement("div");
  botDiv.id = "bot";
  botDiv.innerHTML = `Chatbot: <span id="bot-response">${product}</span>`;
  chatDiv.appendChild(botDiv);

  let botUp = document.getElementById("chat")
  botUp.insertBefore(botDiv, botUp.childNodes[0])
  let chatUp = document.getElementById("chat")
  chatUp.insertBefore(userDiv, chatUp.childNodes[0])
} 

import Card from "./components/Card"

const App = () => {

  const companyData = [
  {
    name: "Facebook (Meta)",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
    role: "Frontend Developer",
    description: "UI design, React, optimization"
  },
  {
    name: "Amazon",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
    role: "SDE Developer",
    description: "Backend logic, scalability, APIs"
  },
  {
    name: "Apple",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    role: "iOS Engineer",
    description: "Swift, UI design, innovation"
  },
  {
    name: "Netflix",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    role: "Data Engineer",
    description: "ETL, data pipelines, analytics"
  },
  {
    name: "Google",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    role: "ML Engineer",
    description: "AI models, TensorFlow, data"
  },
  {
    name: "Microsoft",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    role: "Cloud Architect",
    description: "Azure, networking, infrastructure"
  },
  {
    name: "Tesla",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
    role: "Embedded Engineer",
    description: "C++, firmware, hardware systems"
  },
  {
    name: "OpenAI",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
    role: "AI Researcher",
    description: "LLMs, NLP, neural networks"
  },
  {
    name: "Adobe",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Adobe_Corporate_logo.svg",
    role: "UI/UX Designer",
    description: "Figma, creativity, user flow"
  },
  {
    name: "NVIDIA",
    image: "https://upload.wikimedia.org/wikipedia/en/2/21/Nvidia_logo.svg",
    role: "GPU Developer",
    description: "CUDA, deep learning, graphics"
  },
  {
    name: "IBM",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    role: "Data Scientist",
    description: "Analytics, AI models, insights"
  },
  {
    name: "Intel",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Intel-logo.svg",
    role: "Chip Designer",
    description: "VLSI, circuits, processors"
  },
  {
    name: "Salesforce",
    image: "https://upload.wikimedia.org/wikipedia/en/f/f9/Salesforce.com_logo.svg",
    role: "CRM Engineer",
    description: "Cloud apps, automation, APIs"
  },
  {
    name: "Spotify",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg",
    role: "Backend Engineer",
    description: "APIs, data streaming, scaling"
  },
  {
    name: "LinkedIn",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
    role: "Full Stack Developer",
    description: "Node.js, React, user analytics"
  }
];

  return (
    <div className="cards-row">
      {companyData.map((elem) => (
        <Card image={elem.image} name ={elem.name} role = {elem.role} desc = {elem.description}/>
      ))}
    </div>
  )
}

export default App

// Website Configuration
// Update these values to customize your website

const WEBSITE_CONFIG = {
    organizationName: "GVMUN",
    fullName: "Global Virtual Model United Nations",
    
    nextConference: {
        name: "GVMUNC IX",
        date: "2025-10-15T00:00:00",
        registrationUrl: "#" 
    },
    
    stats: {
        delegates: "1300+",
        countries: "30+",
        previousConference: "GVMUNEC IV 2024"
    },
    
    socialMedia: {
        whatsapp: "#", 
        twitter: "#",  
        instagram: "#", 
        linkedin: "#"   
    },
    
    externalLinks: {
        newsletter: "#", 
        memo: "#",       
        pressRelease: "#",
        mymun: "https://mymun.com"
    },
    
    contact: {
        email: "contact@gvmun.org", 
        phone: "", 
        address: "" 
    },
    
    
    team: [
        {
            name: "Ayushmaan Mukherjee",
            role: "Secretary General",
            image: "assets/team/ayushmaan.jpg"
        },
        {
            name: "Kush Dave",
            role: "Secretary General", 
            image: "assets/team/kush.jpg"
        },
        {
            name: "Aayush Dhar",
            role: "Undersecretary General",
            image: "assets/team/aayush.jpg"
        },
        {
            name: "Anushka Chaudhary",
            role: "Graphic Designer",
            image: "assets/team/anushka.jpg"
        },
        {
            name: "Jackson Dorris",
            role: "Journalism Head",
            image: "assets/team/jackson.jpg"
        },
        {
            name: "Lilli Stroock",
            role: "Outreach Head",
            image: "assets/team/lilli.jpg"
        },
        {
            name: "Tharun Naguleswaran",
            role: "Webmaster",
            image: "assets/team/tharun.jpg"
        }
    ],
    
    partners: [
        {
            name: "Project Delegate",
            logo: "assets/partners/project-delegate.png",
            url: "#"
        },
        {
            name: "WAVEMUN",
            logo: "assets/partners/wavemun.png", 
            url: "#"
        },
        {
            name: "VAIMUN",
            logo: "assets/partners/vaimun.png",
            url: "#"
        }
    ],
    
  
    theme: {
        primaryColor: "#2563eb",
        secondaryColor: "#764ba2",
        accentColor: "#fbbf24",
        backgroundColor: "#f8fafc",
        textColor: "#1f2937"
    }
};


if (typeof module !== 'undefined' && module.exports) {
    module.exports = WEBSITE_CONFIG;
}

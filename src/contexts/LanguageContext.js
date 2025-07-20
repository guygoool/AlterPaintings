'use client'
import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

export const translations = {
  en: {
    // Navigation
    home: 'Home',
    gallery: 'Gallery',
    about: 'About',
    contact: 'Contact',
    
    // Homepage
    heroSubtitle: '',
    viewGallery: 'View Gallery',
    welcomeTitle: 'Artist Collection',
    welcomeText: 'With decades of experience and a passion for capturing the human spirit, each painting tells a unique story. From powerful portraits to serene landscapes, explore a collection that celebrates life, emotion, and artistic mastery.',
    featuredWorks: 'Featured Works',
    viewAllPaintings: 'View All Paintings',
    commissionTitle: 'Interested in a Commission?',
    commissionText: 'Custom portraits and paintings available. Let\'s bring your vision to life.',
    getInTouch: 'Get In Touch',
    
    // Gallery
    artGallery: 'Art Gallery',
    galleryDescription: 'Explore the complete collection of original paintings. Each piece represents years of artistic dedication and mastery of technique.',
    all: 'All',
    portraits: 'Portraits',
    landscapes: 'Landscapes',
    noPaintingsFound: 'No paintings found in this category.',
    
    // Painting Detail
    paintingNotFound: 'Painting Not Found',
    backToGallery: 'Back to Gallery',
    medium: 'Medium',
    size: 'Size',
    year: 'Year',
    interestedText: 'Interested in this piece? Get in touch for more information.',
    contactArtist: 'Contact Artist',
    morePaintings: 'More Paintings',
    
    // About
    aboutArtist: 'About the Artist',
    artistPhoto: 'Artist Photo',
    comingSoon: 'Coming Soon',
    lifetimePassion: 'A Lifetime of Artistic Passion',
    aboutText1: 'With decades of experience in the art world, this master painter has dedicated their life to capturing the beauty and complexity of human emotion and the natural world. Each brushstroke tells a story, each color choice deliberate and meaningful.',
    aboutText2: 'Specializing in oil paintings, the artist has developed a distinctive style that blends classical techniques with contemporary sensibilities. Their work often focuses on portraiture, where they excel at capturing not just the physical likeness but the very essence of their subjects.',
    aboutText3: 'Over the years, they have created more than 50 original works, each piece representing hours of careful observation, planning, and execution. The collection spans various subjects from intimate portraits to sweeping landscapes, all unified by a masterful use of light and color.',
    artisticPhilosophy: 'Artistic Philosophy',
    philosophyQuote: 'Art is about connection - between the artist and subject, between the artwork and viewer. Every painting should evoke emotion, tell a story, and invite the observer to see the world through a different lens.',
    artisticJourney: 'Artistic Journey',
    earlyYears: 'Early Years: Developed passion for art and began formal training',
    professionalDev: 'Professional Development: Refined techniques and established signature style',
    masterPeriod: 'Master Period: Created acclaimed works focusing on portraiture and landscapes',
    currentWork: 'Current Work: Continues to paint and accept select commissions',
    originalPaintings: 'Original Paintings',
    yearsExperience: 'Years of Experience',
    passionForArt: 'Passion for Art',
    
    // Contact
    contactTitle: 'Get In Touch',
    contactDescription: 'Interested in a painting, have questions about the collection, or looking for a custom commission? I\'d love to hear from you.',
    sendMessage: 'Send a Message',
    name: 'Name',
    email: 'Email',
    subject: 'Subject',
    message: 'Message',
    selectSubject: 'Select a subject',
    generalInquiry: 'General Inquiry',
    purchaseInquiry: 'Purchase Inquiry',
    commissionRequest: 'Commission Request',
    exhibition: 'Exhibition/Display',
    messagePlaceholder: 'Tell me about your interest in the artwork or commission request...',
    sendMessageButton: 'Send Message',
    commissionWork: 'Commission Work',
    commissionText1: 'I accept select commission projects for:',
    portraitPaintings: 'Portrait paintings from photographs',
    customLandscapes: 'Custom landscape pieces',
    memorialArt: 'Memorial and commemorative artwork',
    corporateArt: 'Corporate and institutional pieces',
    commissionTimeline: 'Commission timeline: 4-8 weeks depending on size and complexity',
    artworkPurchases: 'Artwork Purchases',
    purchaseText: 'Original paintings from the collection are available for purchase. Each piece comes with:',
    certificate: 'Certificate of authenticity',
    packaging: 'Professional packaging and shipping',
    careInstructions: 'Care and maintenance instructions',
    artistStatement: 'Artist\'s statement about the piece',
    responseTime: 'Response Time',
    responseText: 'I personally respond to all inquiries within 24-48 hours. For urgent requests, please mention it in your message.',
    thankYou: 'Thank you for your interest in my artwork!',
    messageSuccess: 'Thank you for your message! We will get back to you soon.',
    
    // Footer
    copyright: 'All rights reserved. Original artwork by Alter Metzger.',
    inquiriesText: 'For inquiries about paintings, please use the contact page.',
    
    // Language
    language: 'Language',
    english: 'English',
    hebrew: 'עברית'
  },
  he: {
    // Navigation
    home: 'בית',
    gallery: 'גלריה',
    about: 'אודות',
    contact: 'צור קשר',
    
    // Homepage
    heroSubtitle: '',
    viewGallery: 'צפה בגלריה',
    welcomeTitle: 'אוסף האמן',
    welcomeText: 'עם עשרות שנות ניסיון ותשוקה ללכידת הרוח האנושית, כל ציור מספר סיפור ייחודי. מפורטרטים עוצמתיים ועד נופים שלווים, חקרו אוסף החוגג חיים, רגש ושליטה אמנותית.',
    featuredWorks: 'יצירות נבחרות',
    viewAllPaintings: 'צפה בכל הציורים',
    commissionTitle: 'מעוניינים בהזמנת ציור?',
    commissionText: 'פורטרטים וציורים מותאמים אישית זמינים. בואו נביא את החזון שלכם לחיים.',
    getInTouch: 'צרו קשר',
    
    // Gallery
    artGallery: 'גלריית אמנות',
    galleryDescription: 'חקרו את האוסף השלם של ציורים מקוריים. כל יצירה מייצגת שנים של מסירות אמנותית ושליטה בטכניקה.',
    all: 'הכל',
    portraits: 'פורטרטים',
    landscapes: 'נופים',
    noPaintingsFound: 'לא נמצאו ציורים בקטגוריה זו.',
    
    // Painting Detail
    paintingNotFound: 'הציור לא נמצא',
    backToGallery: 'חזרה לגלריה',
    medium: 'חומר',
    size: 'גודל',
    year: 'שנה',
    interestedText: 'מעוניינים ביצירה זו? צרו קשר לקבלת מידע נוסף.',
    contactArtist: 'צור קשר עם האמן',
    morePaintings: 'ציורים נוספים',
    
    // About
    aboutArtist: 'אודות האמן',
    artistPhoto: 'תמונת האמן',
    comingSoon: 'בקרוב',
    lifetimePassion: 'תשוקה של כל החיים לאמנות',
    aboutText1: 'עם עשרות שנות ניסיון בעולם האמנות, האמן המאסטר הזה הקדיש את חייו ללכידת היופי והמורכבות של הרגש האנושי והעולם הטבעי. כל משיכת מכחול מספרת סיפור, כל בחירת צבע מכוונת ומשמעותית.',
    aboutText2: 'המתמחה בציורי שמן, האמן פיתח סגנון ייחודי המשלב טכניקות קלאסיות עם רגישות עכשווית. עבודתו מתמקדת לעתים קרובות בפורטרטים, שם הוא מצטיין בלכידת לא רק הדמיון הפיזי אלא המהות האמיתית של הנושאים שלו.',
    aboutText3: 'לאורך השנים, הוא יצר יותר מ-50 יצירות מקוריות, כל יצירה מייצגת שעות של התבוננות זהירה, תכנון וביצוע. האוסף משתרע על פני נושאים שונים מפורטרטים אינטימיים ועד נופים סוחפים, כולם מאוחדים בשימוש מופתי באור וצבע.',
    artisticPhilosophy: 'פילוסופיה אמנותית',
    philosophyQuote: 'אמנות עוסקת בחיבור - בין האמן לנושא, בין היצירה לצופה. כל ציור צריך לעורר רגש, לספר סיפור ולהזמין את הצופה לראות את העולם דרך עדשה אחרת.',
    artisticJourney: 'המסע האמנותי',
    earlyYears: 'השנים המוקדמות: פיתח תשוקה לאמנות והחל הכשרה פורמלית',
    professionalDev: 'פיתוח מקצועי: שיכלל טכניקות וביסס סגנון חתימה',
    masterPeriod: 'תקופת המאסטר: יצר יצירות מוערכות המתמקדות בפורטרטים ונופים',
    currentWork: 'עבודה נוכחית: ממשיך לצייר ומקבל הזמנות נבחרות',
    originalPaintings: 'ציורים מקוריים',
    yearsExperience: 'שנות ניסיון',
    passionForArt: 'תשוקה לאמנות',
    
    // Contact
    contactTitle: 'צרו קשר',
    contactDescription: 'מעוניינים בציור, יש לכם שאלות על האוסף, או מחפשים הזמנה מותאמת אישית? אשמח לשמוע מכם.',
    sendMessage: 'שלח הודעה',
    name: 'שם',
    email: 'אימייל',
    subject: 'נושא',
    message: 'הודעה',
    selectSubject: 'בחר נושא',
    generalInquiry: 'פנייה כללית',
    purchaseInquiry: 'פנייה לרכישה',
    commissionRequest: 'בקשת הזמנה',
    exhibition: 'תערוכה/תצוגה',
    messagePlaceholder: 'ספרו לי על העניין שלכם ביצירות האמנות או בקשת ההזמנה...',
    sendMessageButton: 'שלח הודעה',
    commissionWork: 'עבודות הזמנה',
    commissionText1: 'אני מקבל פרויקטי הזמנה נבחרים עבור:',
    portraitPaintings: 'ציורי פורטרט מתצלומים',
    customLandscapes: 'יצירות נוף מותאמות אישית',
    memorialArt: 'יצירות אמנות הנצחה והזכרה',
    corporateArt: 'יצירות תאגידיות ומוסדיות',
    commissionTimeline: 'זמני הזמנה: 4-8 שבועות בהתאם לגודל ומורכבות',
    artworkPurchases: 'רכישת יצירות אמנות',
    purchaseText: 'ציורים מקוריים מהאוסף זמינים לרכישה. כל יצירה מגיעה עם:',
    certificate: 'תעודת אמיתות',
    packaging: 'אריזה ומשלוח מקצועיים',
    careInstructions: 'הוראות טיפוח ותחזוקה',
    artistStatement: 'הצהרת האמן על היצירה',
    responseTime: 'זמן מענה',
    responseText: 'אני מגיב אישית לכל הפניות תוך 24-48 שעות. לבקשות דחופות, אנא ציינו זאת בהודעתכם.',
    thankYou: 'תודה על העניין שלכם ביצירות האמנות שלי!',
    messageSuccess: 'תודה על ההודעה שלכם! נחזור אליכם בקרוב.',
    
    // Footer
    copyright: 'כל הזכויות שמורות. יצירות אמנות מקוריות של אלתר מצגר.',
    inquiriesText: 'לפניות על ציורים, אנא השתמשו בעמוד יצירת הקשר.',
    
    // Language
    language: 'שפה',
    english: 'English',
    hebrew: 'עברית'
  }
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en')
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const savedLanguage = localStorage.getItem('language')
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'he')) {
      setLanguage(savedLanguage)
    }
  }, [])

  const switchLanguage = (lang) => {
    setLanguage(lang)
    if (isClient) {
      localStorage.setItem('language', lang)
    }
  }

  const t = (key) => {
    return translations[language]?.[key] || translations.en[key] || key
  }

  const value = {
    language,
    switchLanguage,
    t,
    isRTL: language === 'he'
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
} 


export const whatsappConfig = {
  
  phoneNumber: "2348062690220",
  
  defaultMessage: "Hello! I would like to inquire about your services.",
  
  companyName: "Omnix Labs",
  
  greeting: "Hi there! 👋 How can we help you today?",
  
  position: "bottom-right",
  
  showOnScroll: false,
  
  scrollThreshold: 100,
  
  // Working hours (optional - for future use)
  workingHours: {
    enabled: false,
    timezone: "Africa/Lagos",
    schedule: {
      monday: { start: "09:00", end: "17:00" },
      tuesday: { start: "09:00", end: "17:00" },
      wednesday: { start: "09:00", end: "17:00" },
      thursday: { start: "09:00", end: "17:00" },
      friday: { start: "09:00", end: "17:00" },
      saturday: { start: "09:00", end: "13:00" },
      sunday: { closed: true },
    },
  },
};
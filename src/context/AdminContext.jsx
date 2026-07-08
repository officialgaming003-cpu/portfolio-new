import React, { createContext, useState, useCallback } from 'react'

export const AdminContext = createContext()

export const AdminProvider = ({ children }) => {
  const [isAdminOpen, setIsAdminOpen] = useState(false)
  const [adminTab, setAdminTab] = useState('dashboard')
  const [content, setContent] = useState({
    hero: {
      badge: '⭐ WEB DEVELOPER • BOT BUILDER • SCRAPER ENGINEER',
      title: 'Building high-performance web apps, bots, and scrapers',
      description: 'Hi, I\'m Aditama Gilang Farel — a full-stack developer focused on web apps, automation bots, and scraping systems.'
    },
    services: [
      {
        id: 1,
        number: '01',
        title: 'Web Development',
        description: 'Custom full-stack web applications—from strategic landing pages to complex SaaS platforms.',
        techs: ['LARAVEL', 'INERTIA', 'NEXT.JS', 'NUXT.JS']
      },
      {
        id: 2,
        number: '02',
        title: 'Scraping & Automation',
        description: 'Advanced data extraction, automated bank mutation systems, anti-bot bypass.',
        techs: ['PLAYWRIGHT', 'PUPPETEER', 'SELENIUM']
      },
      {
        id: 3,
        number: '03',
        title: 'Bot Development',
        description: 'Intelligent bots for Telegram, Discord, and WhatsApp.',
        techs: ['GRAMMY', 'TELEGRAM', 'DISCORD.JS']
      }
    ],
    marketplace: [
      {
        id: 1,
        title: 'Source Code Self-hosted Payment Gateway QRIS GoPay Merchant',
        description: 'Source code self-hosted payment gateway menggunakan akun GoPay Merchant.',
        price: 'Rp 2.000.000',
        originalPrice: 'Rp 2.500.000',
        image: '💻'
      },
      {
        id: 2,
        title: 'Source Code Cek Mutasi Bank BCA Personal (iBank)',
        description: 'Source code pengecekan mutasi rekening BCA Personal (iBank) secara berkala.',
        price: 'Rp 1.000.000',
        originalPrice: 'Rp 1.500.000',
        image: '🏦'
      }
    ]
  })

  const updateHero = useCallback((data) => {
    setContent(prev => ({
      ...prev,
      hero: { ...prev.hero, ...data }
    }))
  }, [])

  const updateService = useCallback((id, data) => {
    setContent(prev => ({
      ...prev,
      services: prev.services.map(s => s.id === id ? { ...s, ...data } : s)
    }))
  }, [])

  const updateMarketplace = useCallback((id, data) => {
    setContent(prev => ({
      ...prev,
      marketplace: prev.marketplace.map(m => m.id === id ? { ...m, ...data } : m)
    }))
  }, [])

  const value = {
    isAdminOpen,
    setIsAdminOpen,
    adminTab,
    setAdminTab,
    content,
    updateHero,
    updateService,
    updateMarketplace
  }

  return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
}

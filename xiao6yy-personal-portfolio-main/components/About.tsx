"use client"

import React from "react"
import { motion } from "framer-motion"
import SectionHeading from "./SectionHeading"
import { useSectionInView } from "@/lib/hooks"
import { useLocale, useTranslations } from "next-intl"

export default function About() {
  const { ref } = useSectionInView("About")
  const t = useTranslations("AboutSection")
  const sectionLan = useTranslations("SectionName")
  const activeLocale = useLocale()

  return (
      <motion.section
          ref={ref}
          className="mb-50 max-w-[45rem] text-start leading-8 sm:mb-40 scroll-mt-28 mb-28 "
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.175 }}
          id="about"
      >
        <SectionHeading>{sectionLan("about")}</SectionHeading>
        {activeLocale == "zh" ? (
            <div className="flex flex-col gap-2">
              <div>你好，我是一名来自中国的学生，现在正在呼和浩特学习。我热爱编程，精通Python、SQL等编程语言。我还喜欢和数据打交道，热爱从数据中发掘一些有趣的东西，偶尔也会做些网站开发的工作。</div>

              <div>你可以点击上方的按钮来访问我的博客，在那里，我会分享更多我自己的故事及更多技术内容。当然了，我的生活不仅仅只有代码，闲暇的时间，我还会打几把英雄联盟，我的最高游戏段位是一区的铂金。
                我还喜欢看一些书籍，比如国内的朱光潜先生的《谈美》《谈文学》，国外的我喜欢马尔克斯的《百年孤独》《霍乱时期的爱情》。
                对了，我还喜欢音乐创作，我和知名作曲家欧阳靖宇老师学习过编曲，完成了几首demo，如果你们感兴趣的话，我会把这些demo上传到网易云音乐。
              </div>

              <div>
                20年我来到这所大学，我的第一份专业是工商管理，虽然我的所有经济课程成绩非常优秀，但是我还是于20年底，申请了转专业，来到了我更喜欢的大数据专业。我现在大四在读，
                学校的课程全部已经修完，现在想要自己学到的技能得到实践，在工作的岗位上，发挥出自己的价值。

              </div>

              <div>
                目前，我在准备2025年秋招。同时在自己的小红书和b站记录技术和生活。
              </div>
            </div>
        ) : (
            <div className="flex flex-col gap-2">
              <div>Hello! I’m a student from China, currently studying in Hohhot. I’m passionate about programming and proficient in languages like Python and SQL. I also enjoy working with data, discovering interesting insights, and occasionally doing some web development.</div>

              <div>You can click the button above to visit my blog, where I share more of my stories and technical content. But of course, my life isn’t all about code. In my spare time, I play League of Legends, with my highest rank being Platinum in the top region. I also enjoy reading books like “On Beauty” and “On Literature” by Zhu Guangqian, and “One Hundred Years of Solitude” and “Love in the Time of Cholera” by Gabriel García Márquez. Oh, and I love composing music too! I’ve learned music arrangement from composer Ouyang Jingyu and completed a few demos. If you’re interested, I’ll upload them to NetEase Cloud Music.</div>

              <div>In 2020, I started my university studies, majoring in Business Administration. Although I performed exceptionally well in all my economics courses, I applied for a major transfer at the end of 2020, and switched to Big Data, a field I’m more passionate about. I’m now a fourth-year student, having completed all my coursework, and I’m eager to put my skills into practice and add value in a professional role.</div>

              <div>Currently, I am preparing for the 2025 job market, while also documenting my tech journey and life on platforms like Xiaohongshu and Bilibili.</div>
            </div>
        )}
      </motion.section>
  )
}

import React from "react";
import { FaReact } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import knowledgeSharingPlatformImage from '@/public/knowledge-sharing-platform.png';
import FGVC11Image from "@/public/FGVC11.png";
import ISIC2024Image from "@/public/ISIC2024.png";
import MusicImage from "@/public/Music.png";
import gameHubImage from "@/public/game-hub.png";
import typingSpeedImage from "@/public/typing-speed.png";
import visualizationImage from "@/public/d3.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experiences",
        hash: "#experience",
    },
    // {
    //     name: "Contact",
    //     hash: "#contact",
    // },
] as const;


export const headerLanguageMap = {
    Home: '首页',
    About: '关于我',
    Projects: '我的项目',
    Skills: '我的技能',
    Experiences: '我的经历',
}


export const experiencesData = [
    {
        "title": "Data Analysis Intern",
        "location": "Beijing Yonyou Network Technology Co., Ltd.",
        "description": "Performed no-code and low-code development on the YonBIP platform. Mainly handled industrial big data. Key tasks included: user requirement analysis, metadata collection, data migration, data analysis, SQL database querying, data visualization, and Python business development." +
            "No-code development: automated multi-source data integration, built snowflake data warehouses, conducted business planning, self-service ETL, and constructed dimension and fact tables. Low-code development: flexibly implemented features, supported offline and real-time data processing, connected to Kafka databases to simulate real-time data streams, and met diverse business needs.",
        "icon": React.createElement(FaReact),
        "date": "August 2024 - September 2024"
    },
    {
        "title": "Modeling Competition",
        "location": "Shuwei Cup International University Mathematical Modeling Challenge",
        "description": `Mainly responsible for analyzing problems and proposing ideas, setting up experimental environments, optimizing models and algorithms to reduce errors, reviewing relevant domestic and international literature, and finally writing the paper in both Chinese and English.`,
        "icon": React.createElement(FaReact),
        "date": "October 2023 - December 2023"
    },
    {
        "title": "Volunteer Experience",
        "location": "Youth Volunteer Association",
        "description": "\"Old Bull Children's Museum\" Volunteer Service: responsible for personnel management, event arrangement, and coordinating personnel to ensure safety during events. Organized performances for the Innovation and Entrepreneurship School Sports Meeting, overseeing personnel rehearsal and preparing emergency supplies to ensure safe rehearsals." +
            "Worked as a staff member for the school sports meeting, responsible for organizing and distributing props, ensuring orderly entry and exit of participants during the event." +
            "Managed volunteer activity registrations, travel arrangements, and reimbursement of expenses after events.",
        "icon": React.createElement(LuGraduationCap),
        "date": "September 2022 - May 2023"
    },
    {
        "title": "New Journey",
        "location": "",
        "description": "Transferred from the School of Economics and Management to the Big Data major in the School of Computer Science and Technology with excellent academic performance.",
        "icon": React.createElement(LuGraduationCap),
        "date": "April 2020 - "
    }
]

export const experiencesDataZn = [
    {
        "title": "数据分析实习生",
        "location": "北京用友网络科技股份有限公司",
        "description": "在YonBIP平台进行无代码和低代码的开发。处理数据类型主要为工业大数据。主要任务为：用户需求分析，元数据采集，数据迁移，数据分析，SQL数据库查询，数据可视化，Python 业务开发。" +
            "无代码开发：自动化整合多源数据，构建雪花数仓，业务规划、自助ETL、构建维度表和事实表。低代码开发：灵活实现功能，支持离线与实时数据处理，连接Kafka数据库模拟实时数据流、满足多样业务需求。",
        "icon": React.createElement(FaReact),
        "date": "2024年8月 - 2024年9月"
    },
    {
        "title": "建模比赛",
        "location": "“数维杯”国际大学生数学建模挑战赛",
        "description": `主要负责问题的分析与思路提出，然后搭建实验环境，优化模型和算法减小误差，翻阅有关国内外参考文献，最后是中文和英语论文的撰写`,
        "icon": React.createElement(FaReact),
        "date": "2023年10月 - 2023年12月"
    },
    {
        "title": "志愿经历",
        "location": "青年志愿者协会",
        "description": "老牛儿童博物馆”志愿服务:负责人员的管理，活动的安排，人员的对接，确保在活动的过程中，随行人员的安全。创新创业校运动会的演出，负责组织人员的排练活动，然后准备应急物品，确保演出排练安全进行。" +
            "校运动会工作人员，负责道具的整理与发放，确保运动会进行期间，人员的有序进场和离场。" +
            "幕后负责参与志愿活动人员的报名与统计，出行活动的安排明细，活动结束后的账单的报销。",
        "icon": React.createElement(LuGraduationCap),
        "date": "2022年9月 - 2023年9月"
    },
    {
        "title": "新的启程",
        "location": "",
        "description": "以优秀的成绩，从经济管理学院转到计算机科学技术学院的大数据专业",
        "icon": React.createElement(LuGraduationCap),
        "date": "2020年4月 - "
    }
]


export type ProjectTags = typeof projectsData[number]["tags"];

export const projectsData = [
    {
        title: "ISIC-2024---Skin-Cancer-Detection-with-3D-TBP",
        title_zh: "基于GBDT模型和图像模型集成的皮肤癌分类",
        description:
            "Develop AI algorithms to classify 3D-TBP (3D full-body photograph) skin datasets into malignant, benign, and neutral categories. This binary classification algorithm can be used for populations without access to professional medical care, helping people detect issues early and receive timely treatment.",
        desc_zh: "开发Al算法，对3D-TBP（3D 全身照片）皮肤数据集进行恶性良性中性进行分来，该二元分类算法可以用于无法获得专业医疗护理的人群，帮助人们早日发现并及时治疗。",
        tags: ["GBDT", "XGBoost", "LGBM", "CatBoost", "PyTorch", "Transformer"],
        imageUrl: ISIC2024Image,
        projectUrl: "https://github.com/xiao6yy/ISIC-2024---Skin-Cancer-Detection-with-3D-TBP",
        demoUrl: ""
    },
    {
        title: "PlantTraits2024---FGVC11",
        title_zh: '基于植物图像预测重要的植物特征',
        description:
            "Based on plant images, corresponding image labels, and auxiliary data (such as satellite data, soil data, and climate data), predict important plant characteristics (such as plant height, seed quality, leaf area, etc.)",
        desc_zh: "基于植物图像、图像对应的标签及辅助数据（如卫星数据、土壤数据、气候数据），预测植物的重要的特征（如株高、种子质量、叶面积等）。",
        tags: ["Torch", "Transformer", "Numpy", 'Pandas', 'ToTensorV2'],
        imageUrl: FGVC11Image,
        projectUrl: 'https://github.com/xiao6yy/PlantTraits2024---FGVC11',
        demoUrl: '',
    },
    {
        title: "Music recommendation system based on convolutional neural networks",
        title_zh: "基于卷积神经网络音乐推荐系统",
        description:
            `Recommend music based on the content of the song by converting the audio signal into a Mel spectrogram, extracting feature values, and feeding them into a convolutional neural network for training.
            `,
        desc_zh: "根据歌曲的内容进行音乐推荐，将音频信号转化成梅尔频谱，提取特征值，交给卷积神经网络进行训练",
        tags: ["Pytorch", "django", "Torchaudio", "Pandas", "HTML", "CSS", "JavaScript"],
        imageUrl: MusicImage,
        projectUrl: 'https://github.com/xiao6yy/Music-about-neural-networks',
        demoUrl: '',
    },
    {
        title: "Global Wealth Spectrum Visualisation",
        title_zh: '世界财富可视化光谱',
        description: "This interactive visualization explores how tax policies influence wealth, how industries impact fortunes differently by gender, and how these effects vary across continents. Dive into our data to uncover the complex layers of global wealth.",
        desc_zh: "交互式可视化图表探讨了税收政策如何影响财富、不同行业对不同性别的财富的影响以及这些影响在各大洲之间的差异。深入了解我们的数据，揭示全球财富的复杂层次。",
        tags: ["d3.js", "HTML", "CSS", "Vanilla JavaScript"],
        imageUrl: visualizationImage,
        projectUrl: 'https://github.com/xiao6yy/Global-Wealth-Spectrum-Visualisation',
        demoUrl: '',
    },


]

export const skillsData = [
    "Python",
    "Numpy",
    "Pandas",
    "SQL",
    "Excel",
    "PyTorch",
    "TensorFlow",
    "Transformer",
    "LLM",
    "R",
    "SVM",
    "Django",
    "Flask",
    "Spark",
    "Hive",
    "MongoDB",
    "HTML",
    "CSS",
    "JavaScript",
    "Vue3",
    "Node",
    "Git",
    "Github",
] 

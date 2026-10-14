import type { ResumeData, ResumeRecords } from '../domain/model';

const initialData: ResumeData = {
  photo: '/profile.jpg',
  updatedAt: '2026年10月14日',
  kana: 'リ ヤン',
  name: '李 陽',
  romanName: 'LI YANG',
  headline: 'Javaバックエンドエンジニア',
  developmentYears: '5+',
  primaryTechnologies: 'Java / Spring Boot',
  introduction:
    'JavaとSpring Bootを中心に、EC・配車・クラウドサービスのバックエンド開発に携わってきました。コードレビューやJava開発の研修講師も経験しています。',
  nationality: '中国',
  birthDate: '1999年8月1日生（27歳）',
  gender: '男',
  phone: '090-7443-6219',
  email: 'Lijinze0715@gmail.com',
  stations: 'JR常磐線 三河島駅／JR山手線 日暮里駅',
  address: '〒116-0014 東京都荒川区東日暮里2丁目18番10号 メゾンドレカン303',
  addressKana: 'トウキョウト アラカワク ヒガシニッポリ 2チョウメ 18バン 10ゴウ',
  residenceStatus: '留学',
  residenceExpiry: '2027年1月5日まで',
  skills: [
    'Java',
    'Spring Boot',
    'MySQL',
    'Redis',
    'Maven',
    'Git',
    'Docker',
    'Kubernetes',
    'IntelliJ IDEA',
  ],
  languages: [
    '中国語：母語',
    '日本語：N3コース修了、N2コース受講中',
    '英語：基本的な読み書きと技術文書の読解が可能',
  ],
  education: [
    {
      year: '2014',
      month: '6',
      title: '（中国・黒竜江省大慶市）大慶中学（高等学校）卒業',
    },
    {
      year: '2014',
      month: '8',
      title: '（中国）ハルビン工程大学 輪機工程学科 入学',
    },
    {
      year: '2018',
      month: '6',
      title: '（中国）ハルビン工程大学 輪機工程学科 卒業（工学学士）',
    },
    {
      year: '2025',
      month: '10',
      title: '新井学園赤門会日本語学校 入学',
    },
  ],
  experience: [
    {
      year: '2018',
      month: '8',
      title:
        '（中国）上海物友ネットワーク科技有限公司 入社 （Javaバックエンド開発を担当）',
    },
    {
      year: '2021',
      month: '10',
      title:
        '（中国）上海物友ネットワーク科技有限公司 退職 （一身上の都合により退職）',
    },
    {
      year: '2021',
      month: '12',
      title: '（中国）華為技術有限公司 入社 （Javaバックエンド開発を担当）',
    },
    {
      year: '2024',
      month: '5',
      title: '（中国）華為技術有限公司 退職 （一身上の都合により退職）',
    },
    {
      year: '2024',
      month: '6',
      title:
        '（中国）武漢多来碼情報技術有限公司 入社 （Java開発研修講師として勤務）',
    },
    {
      year: '2025',
      month: '8',
      title: '（中国）武漢多来碼情報技術有限公司 退職 （日本留学のため）',
    },
  ],
  licenses: [
    {
      year: '',
      month: '',
      name: '特になし',
    },
  ],
  japanReason:
    '大学4年次にJava、データベース、Webバックエンド開発を独学し、卒業後はソフトウェア開発に従事しました。日本で長期的にJava開発に携わりたいと考え、来日しました。現在は赤門会日本語学校で日本語を学んでいます。',
  selfPr:
    'バックエンドサービスの開発から保守まで、継続して担当できることが強みです。華為では、データライフサイクル管理とコールドデータ移行のサービスを担当し、機能追加、不具合修正、コードのリファクタリングに取り組みました。\n共通のMaven Parent POMを提案し、導入しました。100以上のJavaリポジトリで使用する共通ライブラリのバージョンを一元管理し、各リポジトリで繰り返していた更新作業を削減しました。コードレビュー、技術文書の作成、新入社員への指導も経験しました。',
  motivation:
    '日本でJavaバックエンド開発に継続して携わりたいと考えています。マイクロサービスの開発、不具合の調査、コードのリファクタリング、ライブラリのバージョン管理の経験があります。これらの経験を生かし、機能開発や既存システムの改善に貢献したいと考えています。',
  availability: '在留資格変更許可後、入社可能（時期は応相談）',
  preferredLocation: '東京都内で、日暮里駅からの通勤時間が約40分以内の場所',
  family: '配偶者：無／扶養家族：無',
  health: '良好',
  careerSummary:
    '2018年から2024年まで、Javaバックエンド開発に従事し、EC・配車・クラウドサービスの開発に携わりました。華為では、主にデータライフサイクル管理とコールドデータ移行のサービスを担当しました。CI/CDパイプラインの管理とリリース業務も担当しました。\n2024年から2025年までは、Java開発の研修講師を務めました。Javaの基礎、開発ツールの使い方、テスト、デプロイ、不具合の調査方法を教えました。',
  projects: [
    {
      period: '2021.12 — 2024.05',
      title: '乾坤クラウドサービス',
      company: '華為技術有限公司',
      role: 'Javaバックエンドエンジニア／CI/CD・リリース担当（CIE）',
      overview:
        '乾坤クラウドサービスのデータセキュリティに関わるバックエンド開発を担当しました。主にデータライフサイクル管理とコールドデータ移行の2つのマイクロサービスの開発・保守を担当しました。',
      responsibilities: [
        'データライフサイクル管理とコールドデータ移行のサービスで、機能の開発、保守、不具合の修正、コードの改善を担当しました。データセキュリティのマイクロサービスの一部機能も開発しました。',
        'チームのコードレビューに参加し、修正案を出しました。技術文書も作成しました。',
        '2023年1月から6月まで、チームのCloudSOP環境への対応と顧客向けバージョンのリリースに参加しました。GaussDB、Kubernetesなどの環境やコンポーネントに合わせて、アプリケーションを修正しました。',
        '2023年7月から12月まで、他のチームを支援しました。CloudSOPの機能対応とコード品質のチェックで見つかった問題を修正しました。',
        '2024年に、データライフサイクル管理サービス全体のコードをリファクタリングしました。',
        '社内CI/CDパイプラインの作成と保守、ビルド、リリースを担当しました。リリース前に、脆弱性、信頼性テスト、コードカバレッジなどを確認しました。本番環境の設定、デプロイ、ライブラリのバージョン管理にも参加しました。',
      ],
      technologies:
        'Java / Spring Boot / MySQL / GaussDB / Redis / Kafka / HDFS / Elasticsearch / Shell / Maven / Git / Docker / Kubernetes / Huawei Cloud',
      outcome:
        '共通のMaven Parent POMを導入し、100以上のJavaリポジトリで使用する共通ライブラリのバージョンを一元管理しました。これにより、繰り返し発生していた更新作業を削減しました。\nデータライフサイクル管理サービス全体のコードをリファクタリングしました。コード構成、依存関係、命名、責務を整理し、HDFSの削除などの複雑な処理を改善しました。変更はマージ済みです。\nCloudSOPへの対応を予定どおりに終え、データベース接続プールに関する問題を1件解決しました。\n累計3万行以上のコードを実装・納品し、コードレビューで500件以上の改善提案を行いました。担当期間中、データライフサイクル管理とコールドデータ移行のサービスで重大な本番障害はありませんでした。',
    },
    {
      period: '2024.06 — 2025.08',
      title: 'Javaバックエンド開発研修',
      company: '武漢多来碼情報技術有限公司',
      role: 'Java開発研修講師',
      overview:
        'Javaの基礎とバックエンド開発の研修を担当しました。マイクロサービスの開発、テスト、デプロイ、不具合の調査を学ぶ実習を行いました。',
      responsibilities: [
        'コンピュータの基本、Javaのプログラミング、コードの動きを説明し、受講者のプログラミング練習を指導しました。',
        'Maven、Git、Docker、Kubernetes、Linux Shellの使い方を教えました。プロジェクトのビルド、テスト、デプロイ、不具合の調査も指導しました。',
      ],
      technologies:
        'Java / Spring Boot / MySQL / Redis / Docker / Kubernetes / Shell / Maven / Git',
      outcome:
        '10期の研修を担当しました。各期の平均期間は約1か月で、受講者は合計300人以上でした。\n受講者の平均就職率は90％でした。',
    },
    {
      period: '2018.08 — 2021.10',
      title: '易買WeChatミニプログラムEC／野馬配車サービス',
      company: '上海物友ネットワーク科技有限公司',
      role: 'Javaバックエンドエンジニア',
      overview:
        '易買は、WeChatのミニプログラムを使った食品のECサービスです。注文した食品を翌日に自宅へ届けます。\n野馬は、WeChatのミニプログラムを使った配車サービスです。経路検索、料金計算、車両検索、ドライバーへの配車などの機能があります。',
      responsibilities: [
        '易買の業務分析、設計、バックエンド開発、テスト、リリース、保守に参加しました。ユーザー、店舗、商品、在庫、カート、注文、ユーザー設定の機能を担当しました。',
        '野馬の一部機能の開発に参加しました。経路検索、料金計算、配車を担当し、分析、設計、テスト、リリース、保守も行いました。',
      ],
      technologies:
        'Java / Spring Boot / Spring Cloud / MySQL / Redis / RocketMQ / Shell',
      outcome:
        '各バージョンを予定どおりにリリースしました。リリース後、担当した機能で重大な本番障害はありませんでした。\n累計5万行以上のコードを実装・納品しました。',
    },
  ],
};

const initialChineseData: ResumeData = {
  photo: '/profile.jpg',
  updatedAt: '2026年10月14日',
  kana: 'LI YANG',
  name: '李阳',
  romanName: 'LI YANG',
  headline: 'Java 后端工程师',
  developmentYears: '5+',
  primaryTechnologies: 'Java / Spring Boot',
  introduction:
    'Java 后端工程师，主要使用 Java 和 Spring Boot。做过电商、网约车和云服务项目，也有代码评审和 Java 开发培训经验。',
  nationality: '中国',
  birthDate: '1999年8月1日出生（27岁）',
  gender: '男',
  phone: '090-7443-6219',
  email: 'Lijinze0715@gmail.com',
  stations: 'JR常磐线 三河岛站／JR山手线 日暮里站',
  address: '〒116-0014 东京都荒川区东日暮里2丁目18番10号 Maison de Recan 303',
  addressKana: 'トウキョウト アラカワク ヒガシニッポリ 2チョウメ 18バン 10ゴウ',
  residenceStatus: '留学',
  residenceExpiry: '有效期至2027年1月5日',
  skills: [
    'Java',
    'Spring Boot',
    'MySQL',
    'Redis',
    'Maven',
    'Git',
    'Docker',
    'Kubernetes',
    'IntelliJ IDEA',
  ],
  languages: [
    '中文：母语',
    '日语：N3课程结业，正在学习N2课程',
    '英语：可进行基础读写及阅读技术文档',
  ],
  education: [
    {
      year: '2014',
      month: '6',
      title: '中国黑龙江省大庆市 大庆中学（高中）毕业',
    },
    {
      year: '2014',
      month: '8',
      title: '中国 哈尔滨工程大学 轮机工程专业 入学',
    },
    {
      year: '2018',
      month: '6',
      title: '哈尔滨工程大学 轮机工程专业 毕业（工学学士）',
    },
    {
      year: '2025',
      month: '10',
      title: '新井学园赤门会日本语学校 入学',
    },
  ],
  experience: [
    {
      year: '2018',
      month: '8',
      title: '上海物友网络科技有限公司 入职 （负责 Java 后端开发）',
    },
    {
      year: '2021',
      month: '10',
      title: '上海物友网络科技有限公司 离职 （因个人原因离职）',
    },
    {
      year: '2021',
      month: '12',
      title: '华为技术有限公司 入职 （负责 Java 后端开发）',
    },
    {
      year: '2024',
      month: '5',
      title: '华为技术有限公司 离职 （因个人原因离职）',
    },
    {
      year: '2024',
      month: '6',
      title: '武汉多来码信息技术有限公司 入职 （担任 Java 开发培训讲师）',
    },
    {
      year: '2025',
      month: '8',
      title: '武汉多来码信息技术有限公司 离职 （赴日留学）',
    },
  ],
  licenses: [
    {
      year: '',
      month: '',
      name: '暂无',
    },
  ],
  japanReason:
    '大学四年级时开始自学 Java、数据库和 Web 后端开发，毕业后进入软件行业。希望今后长期在日本从事 Java 后端开发，因此来到日本，目前在赤门会日本语学校学习日语。',
  selfPr:
    '我能持续负责一个后端服务的开发和维护。在华为期间，负责数据生命周期管理和冷数据转存服务，处理功能开发、故障修复和代码重构。\n我提出并引入公共 Maven Parent POM，统一管理 100 多个 Java 仓库的公共依赖版本，减少各仓库重复升级的工作。也参与代码评审、技术文档整理和新员工指导。',
  motivation:
    '希望在日本继续从事 Java 后端开发。希望运用微服务开发、故障排查、代码重构和依赖版本管理经验，参与业务功能开发与现有系统的改进。',
  availability: '在留资格变更获批后可入职（具体时间可商议）',
  preferredLocation: '东京都内，且从日暮里站出发通勤约40分钟以内',
  family: '配偶：无／抚养家属：无',
  health: '良好',
  careerSummary:
    '2018 年至 2024 年从事 Java 后端开发，参与电商、网约车和云服务项目。在华为期间，主要负责数据生命周期管理及冷数据转存服务，也负责 CI/CD 流水线和版本发布相关工作。\n2024 年至 2025 年担任 Java 开发培训讲师，负责 Java 基础、开发工具使用、测试部署和问题定位培训。',
  projects: [
    {
      period: '2021.12 — 2024.05',
      title: '乾坤云服务',
      company: '华为技术有限公司',
      role: 'Java 后端工程师／CI/CD 与版本交付（CIE）',
      overview:
        '乾坤云服务的数据安全相关后端开发。主要负责数据生命周期管理和冷数据转存两个微服务的功能开发与维护。',
      responsibilities: [
        '负责数据生命周期管理和冷数据转存服务的功能开发、维护、故障修复及代码优化；参与数据安全微服务的部分功能开发。',
        '参与团队代码评审，提出修改建议，并整理技术经验文档。',
        '2023 年 1—6 月参与本团队 CloudSOP 环境适配和客户版本交付，完成 GaussDB、Kubernetes 等环境和组件的应用侧适配。',
        '2023 年 7—12 月支援其他团队，处理 CloudSOP 功能适配和代码质量检查中的问题。',
        '2024 年完成数据生命周期管理服务的整体代码重构。',
        '负责团队内部 CI/CD 流水线的创建与维护、版本构建与发布，以及漏洞检查、可靠性测试和代码覆盖率等发布前质量检查；参与生产环境配置、部署和依赖库版本管理。',
      ],
      technologies:
        'Java / Spring Boot / MySQL / GaussDB / Redis / Kafka / HDFS / Elasticsearch / Shell / Maven / Git / Docker / Kubernetes / Huawei Cloud',
      outcome:
        '通过公共 Maven Parent POM，统一管理 100 多个 Java 仓库的公共依赖版本，减少重复升级工作。\n完成数据生命周期管理服务的整体重构，整理代码分层、依赖关系、命名和职责，优化 HDFS 删除等复杂处理逻辑。相关修改已合并。\n按期完成 CloudSOP 适配，解决一个数据库连接池相关问题。\n累计交付 3 万行以上代码，提出 500 多条代码评审建议。在本人负责期间，数据生命周期管理和冷数据转存服务未发生重大线上故障。',
    },
    {
      period: '2024.06 — 2025.08',
      title: 'Java 后端开发培训',
      company: '武汉多来码信息技术有限公司',
      role: 'Java 开发培训讲师',
      overview:
        '负责 Java 基础和后端开发实操培训，指导学员练习微服务开发、测试、部署和故障定位。',
      responsibilities: [
        '讲解计算机基本原理、Java 编程和代码运行过程，指导学员完成编程练习。',
        '教授 Maven、Git、Docker、Kubernetes 和 Linux Shell 的使用方法，指导项目构建、测试部署和问题定位。',
      ],
      technologies:
        'Java / Spring Boot / MySQL / Redis / Docker / Kubernetes / Shell / Maven / Git',
      outcome:
        '累计负责 10 期培训，每期平均约 1 个月，累计培训学员 300 余人。\n学员平均就业率 90%。',
    },
    {
      period: '2018.08 — 2021.10',
      title: '易买微信小程序商城/野马出行网约车项目',
      company: '上海物友网络科技有限公司',
      role: 'Java后端工程师',
      overview:
        '易买是微信小程序生鲜商城，支持用户下单购买食材并于次日配送到家。\n野马出行是微信小程序网约车服务，提供路线查询、费用计算、车辆查找和司机派单等功能。',
      responsibilities: [
        '参与易买商城的业务分析、设计、后端开发、测试、交付和维护，负责用户、商家、商品、库存、购物车、订单及用户设置等模块。',
        '参与野马出行的部分功能开发，包括路线查询、费用计算和派单，并参与相关分析、设计、测试、交付和维护。',
      ],
      technologies:
        'Java / Spring Boot / Spring Cloud / MySQL / Redis / RocketMQ / Shell',
      outcome:
        '按项目计划完成各版本交付。交付后，本人负责的功能未发生重大线上故障。\n累计交付 5 万行以上代码。',
    },
  ],
};

export const resumeRecords: ResumeRecords = {
  ja: initialData,
  zh: initialChineseData,
};

export default {
  title: 'プロジェクト',
  demo: 'デモ',
  case: 'ケーススタディ',
  live: 'ライブ',
  list: [
    {
      id: 0,
      name: 'CVFast',
      techstack: ['Nuxtjs', 'Tailwind', 'Vercel'],
      image: 'cvfast_cover.webp',
      startDate: '2024-02',
      description:
        'CVFastは、数分でプロフェッショナルな履歴書を作成できるオンライン履歴書ビルダーです。様々なテンプレートとカスタマイズオプションを含んでいます。',
      src: 'https://github.com/ralodev/',
      url: 'https://cvfast.com/'
    },
    {
      id: 1,
      name: 'SGIP',
      startDate: '2023-02',
      techstack: ['Vuejs', 'Spring Boot', 'MySQL'],
      image: 'sgip_cover.webp',
      endDate: '2023-07',
      description:
        'SGIPは、会社の人事情報を管理するためのHRMSウェブアプリケーションです。オアハカ工科大学（ITO）のために開発され、現在はプライベートサーバーで稼働しています。',
      src: '',
      url: 'https://sgip.ralo.dev/'
    },
    {
      id: 2,
      name: 'FSMジェネレーター',
      techstack: ['JavaScript', 'HTML5', 'CSS3'],
      image: 'fsm_cover.webp',
      startDate: '2024-01',
      description:
        'FSMジェネレーターは、正規表現から有限状態機械（FSM）/決定性有限オートマトン（DFA）を生成するためのウェブアプリケーションです。',
      src: 'https://github.com/ralodev/FSM-Generator',
      url: 'https://fsm.ralo.dev/'
    },
    {
      id: 3,
      name: 'JavaScriptエンクリプター',
      startDate: '2024-01',
      image: 'encriptador_cover.webp',
      techstack: ['JavaScript', 'HTML5', 'Tailwind'],
      description:
        '定義済みの辞書を使用してテキストメッセージを暗号化および復号化するウェブアプリケーションで、Oracle Next EducationのChallenge01のために作成されました。',
      src: 'https://github.com/ralodev/ONE-encriptador',
      url: 'https://ralodev.github.io/ONE-encriptador/'
    }
  ],
  list_secondary: [
    {
      id: 0,
      name: 'Spring Boot Adv認証',
      techstack: ['Spring Boot', 'Java', 'JWT'],
      image: '',
      startDate: '2022-12',
      description:
        'Spring AdvAuthは、SMTPメール転送、JWTベースの認証、役割ベースの承認、カスタムセキュリティ設定などの機能を含むテンプレートプロジェクトです。',
      src: 'https://github.com/ralodev/SpringSecurity-Jwt-JavaMail',
      url: ''
    },
    {
      id: 1,
      name: 'CrossyRoad',
      techstack: ['C', 'C++', 'OpenGL', 'GLUT'],
      image: '',
      startDate: '2021',
      description:
        '人気ゲームCrossy Roadに基づいたゲームで、CとC++を使用し、3DグラフィックスのためにOpenGLとGLUTを使用して開発されました。',
      src: 'https://github.com/ralodev/CrossyRoad',
      url: ''
    },
    {
      id: 2,
      name: 'DinoRun',
      techstack: ['Java', 'Swing', 'AWT'],
      image: '',
      startDate: '2021',
      description:
        'クラシックなDinoRunゲームで、SwingとAWTライブラリを使用して作成され、ブレゼンハムアルゴリズムを実装するカスタムメイドのグラフィックツールが含まれています。',
      src: 'https://github.com/ralodev/DinoRun-2D',
      url: ''
    }
  ]
}

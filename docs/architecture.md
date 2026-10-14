# 简历站架构

本项目为固定内容的中日双语简历站。结构采用类型、内容、展示和浏览器显示偏好的分离，不再需要读写用例、仓储接口、数据库适配器或内容修订流程。

```text
app/
  page.tsx                    首页入口
  layout.tsx                  页面元信息、字体和全局样式入口
public/
  robots.txt                  静态搜索引擎规则
  documents/                  两个固定日文 Word 文件
src/config/site.ts            部署路径与静态资源 URL
src/modules/resume/
  domain/model.ts             履历数据类型
  content/defaults.ts         中日文固定内容
  content/downloads.ts        当前文档对应的固定文件
  infrastructure/browser/
    storage.ts                显示偏好的容错存储
  presentation/
    resume-app.tsx            数据与展示装配
    use-resume-controller.ts  三种显示切换及页面工具
    context.ts                当前语言
    messages.ts               中日文界面文案
    view-types.ts             版式类型
    components/               展示组件，只接受 ResumeData
    styles/theme.css          主题与基础样式
    styles/resume.css         页面、响应式与打印样式
```

调用关系：首页 → ResumeApp → 固定语言数据 + 当前显示状态 → 展示组件。

数据文件不依赖 React、CSS、HTTP 或持久化。展示模板不导入数据源、不请求接口、不包含内联样式或编辑回调。显示控制器只负责语言、版式和文档切换。localStorage 不可用时仍可切换页面，旧版简历内容缓存不再参与加载。

页面保留三个显示切换工具：resume_switch_document、resume_switch_style、resume_switch_language。内容编辑、删除和自动 Word 生成工具已移除。Word 下载使用原生 a 标签和 download 属性，直接读取 public/documents 下的固定文件。

数据库配置、D1 绑定、管理员验证、内容 API 与 Word 渲染已从本地代码和依赖中删除。Cloudflare 运行配置和相关依赖也已删除。vinext 在构建阶段静态导出首页，GitHub Pages 只接收 dist/client 内的静态文件。此变更不对远程数据库或已部署网站执行操作。

部署工作流从 GitHub Pages 配置读取路径，在构建时注入 NEXT_PUBLIC_BASE_PATH。页面的照片、图标和 Word 地址统一通过 publicAsset 添加路径；CSS、脚本和字体使用 assetPrefix。构建后将框架生成的嵌套资源移到发布目录根部，避免项目路径重复。

scripts/preview-pages.mjs 是本地纯静态预览工具，只模拟 Pages 的目录挂载，不参与线上部署。scripts/check-pages.mjs 检查预渲染首页、静态资源路径和固定 Word 文件是否完整，且发布文件与原文件字节一致。

检查包括类型检查、代码规范、分层约束、移除功能约束、双语日期和联系方式一致性、浏览器存储不可用场景及生产构建。

# LI YANG Professional Profile

中日双语个人简历，使用 React 和 vinext，静态导出后部署到 GitHub Pages。简历内容随代码发布，支持显示切换和两个固定日文 Word 文件的下载。

## 开发与验证

使用 Node.js 22.13 或更新版本和 pnpm。

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm lint
pnpm typecheck
pnpm test
pnpm build
pnpm check:pages
pnpm start
```

`pnpm start` 在 http://localhost:4173 预览实际静态发布目录，并自动使用最近构建的路径前缀。项目不需要数据库、管理员账号、Cloudflare 或 `.openai/hosting.json`。

## GitHub Pages

在仓库 Settings → Pages → Build and deployment 中，将 Source 设置为 **GitHub Actions**。提交并推送到 `main` 后，`.github/workflows/deploy-pages.yml` 会安装依赖、执行检查、构建、核对静态资源，然后发布 `dist/client`。

按当前仓库名称，项目地址为 [Personal Resume](https://lijinze-0715.github.io/Personal-Resume/)。实际域名和路径以 GitHub Pages 设置为准。工作流从 `actions/configure-pages` 读取路径，兼容项目子目录和自定义域名的根路径。

在 PowerShell 中模拟项目子目录：

```powershell
$env:NEXT_PUBLIC_BASE_PATH = '/Personal-Resume'
pnpm build
pnpm check:pages
Remove-Item Env:NEXT_PUBLIC_BASE_PATH
pnpm start
```

此时预览地址为 http://localhost:4173/Personal-Resume/。不设置路径时，构建用于根目录部署。

首页在构建时生成 HTML。`prepare-pages.mjs` 将 vinext 含路径前缀的静态资源目录整理为 Pages 发布目录；`check-pages.mjs` 检查首页、资源和两个 Word 文件，防止成功构建却缺少可发布文件。

## 固定 Word 下载

- `public/documents/LI_YANG_resume_ja.docx`：日文履歴書，A4 两页。
- `public/documents/LI_YANG_career_ja.docx`：日文職務経歴書，A4 两页。

这两个文件根据当前日文数据制作一次，已逐页渲染检查。下载按钮根据当前文档选择对应文件；切换中文或版式不会改变下载文件。网站和构建流程都不生成 Word。

后续可直接用 Word 编辑并覆盖这两个文件，再提交和推送。修改网页履历数据不会自动改写 Word，更新内容时应一并检查固定文件。

## 内容与样式

- `src/modules/resume/content/defaults.ts`：中日文固定履历、联系方式、项目、更新日期及开发年限展示。
- `src/modules/resume/content/downloads.ts`：两类文档与固定 Word 文件的对应关系。
- `src/config/site.ts`：照片、图标和下载地址的部署路径。
- `src/modules/resume/domain/model.ts`：两种语言共用的数据结构。
- `src/modules/resume/presentation/messages.ts`：界面文案。
- `src/modules/resume/presentation/components`：两种履历与职务经历书版式；只接收内容数据。
- `src/modules/resume/presentation/use-resume-controller.ts`：文档、版式、语言切换与显示偏好。
- `src/modules/resume/presentation/styles`：主题、页面、响应式和打印样式。
- `public/profile.jpg`：证件照。

编辑固定数据文件后运行验证并重新构建，即可更新简历。浏览器只保存显示偏好，不读取或保存简历内容缓存。

保留日语/中文、履历书/职务经历书、现代/经典版式切换和浏览器打印样式。
已移除管理页面、在线编辑、图片上传、自动保存、自动 Word 生成、内容 API、D1 数据库与迁移工具。

架构说明见 [docs/architecture.md](docs/architecture.md)。

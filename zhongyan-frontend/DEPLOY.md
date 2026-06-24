# GitHub Pages 部署说明

本目录是静态页面，可以通过 GitHub Actions 发布到 GitHub Pages。

## 部署步骤

1. 在 GitHub 创建一个仓库。
2. 把当前项目推送到该仓库的 `master` 或 `main` 分支。
3. 进入 GitHub 仓库的 `Settings` -> `Pages`。
4. `Build and deployment` 的 `Source` 选择 `GitHub Actions`。
5. 回到 `Actions`，运行或等待 `Deploy static prototype to GitHub Pages`。
6. 部署完成后，Actions 页面会显示公开访问链接。

当前工作流会发布 `zhongyan-frontend` 文件夹，不会发布原站 HTML、资料收集表和规划文档。

### [创建令牌](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token#creating-a-token)

1. [验证您的电子邮件地址](https://docs.github.com/en/free-pro-team@latest/articles/verifying-your-email-address)（如果尚未验证）。

2. 在任何页面的右上角，点击您的个人资料照片，然后点击**设置**。

   ![用户栏中的设置图标](https://docs.github.com/assets/images/help/settings/userbar-account-settings.png)

   

3. 在左侧边栏中，点击**开发人员设置**。

   ![开发人员设定](https://docs.github.com/assets/images/help/settings/developer-settings.png)

   

4. 在左侧边栏中，点击**个人访问令牌**。

   ![个人访问令牌](https://docs.github.com/assets/images/help/settings/personal_access_tokens_tab.png)

   

5. 点击**生成新令牌**。

   ![生成新令牌按钮](https://docs.github.com/assets/images/help/settings/generate_new_token.png)

   

6. 给您的令牌一个描述性名称。

   ![令牌描述字段](https://docs.github.com/assets/images/help/settings/token_description.png)

   

7. 选择您要授予此令牌的范围或权限。要使用令牌从命令行访问存储库，请选择**repo**。

   ![选择令牌范围](https://docs.github.com/assets/images/help/settings/token_scopes.gif)

   

8. 点击**生成令牌**。

   ![生成令牌按钮](https://docs.github.com/assets/images/help/settings/generate_token.png)

   

9. 单击以将令牌复制到剪贴板。出于安全原因，在您离开页面后，您将无法再次看到该令牌。

   ![新创建的令牌](https://docs.github.com/assets/images/help/settings/personal_access_tokens.png)

   

   **警告：**将您的令牌视为密码，并将其保密。使用API时，请将令牌用作环境变量，而不是将其硬编码到程序中。
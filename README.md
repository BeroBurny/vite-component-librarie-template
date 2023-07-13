This is a template for a component library.

The project uses ESLint with the Prettier plugin to enable lint error highlighting and fixes.
The name of PR is validated using Semantic PR. 
Continuous integration is implemented. 
The release process is implemented on Cloudflare with the help of release-please.

Before usage, you should:
 - change name in *package.json*
 - add NPM_TOKEN and CLOUDFLARE_API_TOKEN in GitHub secrets
 - change *projectName* of *page* in *cd.yaml*
 - ensure that the version in *.release-please-manifest.json* is the same as in *package.json*
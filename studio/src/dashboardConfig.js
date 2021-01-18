export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '600553c534bcda5180b34ad3',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-bsnonrua',
                  apiId: '818756d6-8aa0-4e9b-a866-ad45f71bfcc7'
                },
                {
                  buildHookId: '600553c58a2bba6dea5639b6',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-on2wm5mc',
                  apiId: '1e7621db-e3c2-4c34-80ef-d863558a7c02'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/markhext/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-on2wm5mc.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}

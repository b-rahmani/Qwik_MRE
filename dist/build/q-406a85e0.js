import{j as d,S as e,q as l,f as y,z as p,a as f}from"./q-c210a59f.js";import{f as w}from"./q-70be9b46.js";import{i as H}from"./q-338e3912.js";import{G as j}from"./q-5a631909.js";const S=()=>{var g,c,u;const n=j(),{aggregateRating:a,breadcrumb:r,faqPage:o,localBusiness:s,organization:i}=n.frontmatter.schemas||{},m=H()?`${w("API_URL")}/blob/colors`:"/colors.css";return d(p,{children:[e("title",null,null,n.title,1,null),e("meta",null,{content:"width=device-width, initial-scale=1.0",name:"viewport"},null,3,null),e("link",null,{href:"/favicon.ico",rel:"shortcut icon"},null,3,null),(g=n.meta)==null?void 0:g.map(t=>l("meta",{...t},null,0,t.key)),(c=n.links)==null?void 0:c.map(t=>l("link",{...t},null,0,t.key)),(u=n.styles)==null?void 0:u.map(t=>l("style",{...t.props,dangerouslySetInnerHTML:y(t,"style")},null,0,t.key)),i&&e("script",{dangerouslySetInnerHTML:i},{type:"application/ld+json"},null,3,"eH_0"),s&&e("script",{dangerouslySetInnerHTML:s},{type:"application/ld+json"},null,3,"eH_1"),r&&e("script",{dangerouslySetInnerHTML:r},{type:"application/ld+json"},null,3,"eH_2"),a&&e("script",{dangerouslySetInnerHTML:a},{type:"application/ld+json"},null,3,"eH_3"),o&&e("script",{dangerouslySetInnerHTML:o},{type:"application/ld+json"},null,3,"eH_4"),n.frontmatter.googleAnalyticsId&&d(p,{children:[e("script",null,{src:f(t=>`https://www.googletagmanager.com/gtag/js?id=${t.frontmatter.googleAnalyticsId}`,[n])},null,3,null),e("script",{dangerouslySetInnerHTML:`window.dataLayer = window.dataLayer || [];
                            function gtag() {window?.dataLayer?.push(arguments)}
                            gtag('js', new Date());
                            gtag('config', '${n.frontmatter.googleAnalyticsId}');`},null,null,3,null)]},1,"eH_5"),n.frontmatter.googleTagManagerId&&e("script",{dangerouslySetInnerHTML:`(function (w, d, s, l, i) {
                            w[l] = w[l] || []; w[l].push({
                                'gtm.start':
                                    new Date().getTime(), event: 'gtm.js'
                            }); var f = d.getElementsByTagName(s)[0],
                                j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
                                    'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
                        })(window, document, 'script', 'dataLayer','${n.frontmatter.googleTagManagerId}')`},null,null,3,"eH_6"),e("link",{href:m},{rel:"stylesheet",type:"text/css"},null,3,null)]},1,"eH_7")};export{S as s_yDcyHPF1T2o};

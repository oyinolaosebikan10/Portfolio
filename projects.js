const projects = [

{
title: "ChatGPT Clone",
image: "./chatgptscreenshot.png",
category: "design",
description:
"Focused on recreating a modern AI interface layout while maintaining responsiveness and visual structure.",
link: "https://oyingpt-project.vercel.app/"
},

{
title: "Recipe Page",
image: "./recipeimg.png",
category: "design",
description:
"Responsive recipe layout focused on typography, spacing and clean presentation.",
link: "https://recipe-page-six-khaki.vercel.app/"
},

{
title: "YouTube Clone",
image: "./youtubescreenshot.png",
category: "design",
description:
"A responsive video platform clone focused on layout hierarchy and spacing.",
link: "https://youtube-clone-project-ochre.vercel.app/"
},

{
title: "Flexbox Gallery",
image: "./flexboximg.png",
category: "design",
description:
"Flexbox image gallery project focused on responsive alignment and structure.",
link: "https://flexbox-photogallery.vercel.app/"
},

{
title: "FAQ Accordion",
image: "./Faqpic.png",
category: "functional",
description:
"Interactive accordion component using JavaScript for dynamic user interaction.",
link: "https://faq-accordion-project-pi.vercel.app/"
},

{
title: "Career Bot",
image: "./Careerbotpic.png",
category: "functional",
description:
"Frontend chatbot concept exploring interaction and user-focused experiences.",
link: "https://career-guide-bot.vercel.app/"
},

{
title: "OYINX Beauty Intelligence",
image: "./AI_Beauty_Web_img.png",
category: "functional",
description:
"A frontend beauty recommendation concept with future AI-powered ideas and interactive UI.",
link: "https://beauty-care-project.vercel.app/"
}

];

const designContainer =
document.getElementById('design-projects');

const functionalContainer =
document.getElementById('functional-projects');

projects.forEach(project => {

const card = document.createElement('div');

card.classList.add('project-box');

card.innerHTML = `

<div class="project-image-wrap">
<img src="${project.image}">
</div>

<div class="project-content">

<h3>${project.title}</h3>

<p>${project.description}</p>

<div class="project-actions">

<a href="${project.link}" target="_blank">
Live Preview
</a>

</div>

</div>

`;

if(project.category === 'design'){

designContainer.appendChild(card);

}else{

functionalContainer.appendChild(card);

}

});
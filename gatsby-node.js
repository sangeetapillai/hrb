const path = require ('path')
const data = require ('./content/events')


exports.createPages  = ({actions}) => {
    const {createPage} = actions;
    const template = path.resolve('./src/pages/event_template.js')
    console.log(data)
    data.forEach(p => {
        const event_link = p.event_link
        const contents = p.page
        createPage({
            path :
            event_link,
            component : template,
            context : contents
        });
    });

}

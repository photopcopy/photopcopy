# Photopcopy
Pronounced "Photocopy", *the "p" is silent*

Open source re-creation of Photop in Next.js and Typescript!

With**out** the permission of the owner, of course!

## Differences to Photop
A key difference is that Photopcopy is written in typescript + react. Both the server and client code is in a single folder and repository, managed by Next.js.

One problem with Photop is how it's UI is a mess of createElement("id", "div", []), almost like you were trying to switch from code.org to javascript and you forgot that code.org's ui "framework" is absolute garbage.
Here we use React to divide parts of the program into components. Of course it's not perfect, but you have to admit it is at least better than a mess of javascript files where you have no idea what's going on.

Ideally a 1:1 copy of Photop would be nice, but there are a lot of pitfalls with Photop that I aim to solve in Photopcopy. Firstly, I wanted to add animations to make the app more lively. Anyone who uses React should understand that's not the easiest thing to do, but I did manage the very basics.

The UI is also written in a mostly dynamic way. Photop uses a lot of absolute positioning to get their code in the right place, which works but I see it as bad design. Photopcopy uses flexboxes instead to get the stuff in the right place.

## Why even do all this?
The primary reason is out of spite, but if you want a better reason, I also wanted to use this as an opportunity to stave off boredom and as a learning experience too. You'll notice this project is open source, because what's the point of making a copy if you are trying to make it a legitimate app?

At the end of the day, Photopcopy is a joke. A very elaborate joke. If anyone wants to turn this into a real app, just press that fork button on the github repository, `git clone`, `npm install`, `npm run start`, and you're good to go.

## Issues
I rarely attempt building applications of this scale, and this is only my second time building an app with next.js. As such, I lacked the foresight to construct Photopcopy in an idealized way:
* Styles are not delegated to classes, and are rather exclusively inline styles. This happened early on while I was designing the settings manager, and forgot that classes are a thing. This shouldn't affect performance or even the speed of development, however it does lack professionalism and makes the webpage during devtools inspection harder to read.
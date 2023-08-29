export class Router {
  routes = {};

  add(routeName, page) {
    this.routes[routeName] = page;
  }

  route(event) {
    event = event || window.event;
    event.preventDefault();

    window.history.pushState({}, "", event.target.href);
    this.handle();
  }

  handle() {
    const { pathname } = window.location;
    const route = this.routes[pathname];

    fetch(route)
      .then((data) => data.text())
      .then((html) => {
        document.querySelector("#app").innerHTML = html;
      });

    let body = document.querySelector("body");
    body.removeAttribute("class");
    if (pathname === "/") {
      body.classList.add("pageHome");
    } else if (pathname === "/universo") {
      body.classList.add("pageUniverso");
    } else if (pathname === "/exploracao") {
      body.classList.add("pageExploracao");
    }
  }
}

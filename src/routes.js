import RouterDemo from "./components/RouterDemo";
import RouterChildrenDemo from "./components/RouterChildrenDemo";
import Home from "./components/Home";
import Zs from "./components/Zs";
import Ls from "./components/Ls";
import Question1 from "./components/Question1";
import Question2 from "./components/Question2";
import Reply from "./components/Reply";
import Personal from "./components/Personal";
import Shopping from "./components/Shopping";

const routes = [
  { path: "/", component: RouterDemo, name: "0" },
  { path: "/foo", component: RouterDemo, name: "1" },
  { path: "/bar", component: RouterDemo, name: "2" },
  { path: "/Home", component: Home, name: "9" },
  { path: "/ZS", component: Zs, name: "10" },
  { path: "/Ls", component: Ls, name: "1" },
  { path: "/Question1", component: Question1, name: "1" },
  { path: "/Question2", component: Question2, name: "1" },
  { path: "/Reply", component: Reply, name: "1" },
  { path: "/Personal/:name", component: Personal, name: "1",props:true },
  { path: "/Shopping", component: Shopping, name: "1" },
  {
    path: "/user/:id",
    component: RouterDemo,
    name: "3",
    props: true,
    children: [
      {
        path: "profile",
        component: RouterChildrenDemo,
        name: "3-1"
      },
      {
        path: "posts",
        component: RouterChildrenDemo,
        name: "3-2"
      }
    ]
  },
  { path: "/a", redirect: "/bar" },
  { path: "*", component: RouterDemo, name: "404" }
];

export default routes;

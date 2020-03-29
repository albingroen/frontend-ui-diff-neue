import { IProject } from "./types";

const fakeProjects: IProject[] = [
  {
    _id: "5e2322179ff4b30017faf625",
    name: "ui-diff",
    _createdBy: "5e1c5d7958fa520017fca202",
    apiKey: "7AR635G-AM6MEXN-N40Q33V-AGS8JZY",
    images: [
      {
        diff: true,
        _id: "5e4d93234501270017111045",
        default:
          "https://res.cloudinary.com/albin-groen/image/upload/v1582142241/ioh9gohxjqahmubclrei.jpg",
        small:
          "https://res.cloudinary.com/albin-groen/image/upload/w_0.5/v1582142241/ioh9gohxjqahmubclrei.jpg",
        large:
          "https://res.cloudinary.com/albin-groen/image/upload/w_1.5/v1582142241/ioh9gohxjqahmubclrei.jpg",
        publicId: "ioh9gohxjqahmubclrei",
        name: "Start",
        env: "local",
      },
      {
        diff: false,
        _id: "5e4d93244501270017111046",
        default:
          "https://res.cloudinary.com/albin-groen/image/upload/v1582142242/vhbxxxzujbyx0ljybgjh.jpg",
        small:
          "https://res.cloudinary.com/albin-groen/image/upload/w_0.5/v1582142242/vhbxxxzujbyx0ljybgjh.jpg",
        large:
          "https://res.cloudinary.com/albin-groen/image/upload/w_1.5/v1582142242/vhbxxxzujbyx0ljybgjh.jpg",
        publicId: "vhbxxxzujbyx0ljybgjh",
        name: "Start",
        env: "live",
      },
    ],
    createdAt: new Date("2020-01-01"),
    updatedAt: new Date("2020-01-01"),
  },
  {
    _id: "5e24c158ebb5970017edca71",
    name: "Tester",
    _createdBy: "5e24c14cebb5970017edca70",
    apiKey: "7PNRWRJ-DDDMJPA-KE7GPEC-9QY4X9Z",
    images: [],
    createdAt: new Date("2020-01-01"),
    updatedAt: new Date("2020-01-01"),
  },
  {
    _id: "5e1cd46d7d47a11b9fdb7bea",
    name: "frontend-website",
    _team: "5df8dd24f337f86bfd93ba39",
    _createdBy: "5e1c5d7958fa520017fca202",
    apiKey: "1HBN0RD-QXPMSA5-QPAD3CQ-MGYRT72",
    createdAt: new Date("2020-01-01"),
    updatedAt: new Date("2020-01-01"),
  },
];

export default fakeProjects;

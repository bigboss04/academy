import IconPlay from "@/components/icons/IconPlay";

export const menuItems: {
    title: string;
    url: string;
    icons: React.ReactNode;
}[] = [
    {
        title: "Dashboard",
        url: "/",
        icons: <IconPlay className="size-5" />,
    },
    {
        title: "Khóa học",
        url: "/course",
        icons: <IconPlay className="size-5" />,
    },
    {
        title: "Khu vực học tập",
        url: "/study",
        icons: <IconPlay className="size-5" />,
    },
    {
        title: "Săn mã giảm giá",
        url: "/discount-code",
        icons: <IconPlay className="size-5" />,
    },
    {
        title: "Profile",
        url: "/profile",
        icons: <IconPlay className="size-5" />,
    },
];

export type SidebarLink = {
    label: string;
    url: string;
    id?: string;
    icon?: string;
    navHeading?: boolean;
    children?: SidebarLink[];
}

export const SIDEBAR_LINKS: SidebarLink[] = [
    {
        label: 'Trang chủ',
        url: '/admin',
        id: 'dasboard',
        icon: 'bi-grid'
    }, 
    {
        label: 'Người dùng',
        icon: 'bi-person',
        id: 'users',
        url: '#',
        children: [
            {
                label: 'Danh sách',
                url: '/admin/users',
            }
        ]

    },
    {
        label: 'Phim',
        icon: 'bi-film',
        url: '#',
        id: 'movies',
        children: [
            {
                label: 'Danh sách',
                url: '/admin/movies',
            },
        ]

    },
    {
        label: 'Rạp chiếu',
        url: '/admin/cinemas',
        id: 'cinemas',
        icon: 'bi-buildings'
    },
    {
        label: 'Đồ ăn',
        url: '/admin/foods',
        id: 'foods',
        icon: 'bi-cup-straw'
    },
    {
        label: 'Mục khác',
        navHeading: true,
        url: '#'
    },
    {
        label: 'Cài đặt',
        url: '/admin/setting',
        id: 'setting',
        icon: 'bi-gear',
    },
    {
        label: 'Liên hệ',
        url: '/admin/contact',
        id: 'contact-suport',
        icon: 'bi-headset',
    },
    {
        label: 'F.A.Q',
        url: '/admin/faq',
        id: 'faq',
        icon: 'bi-question-circle',
    },
    {
        label: '404',
        url: '/not-found',
        id: 'not_found',
        icon: 'bi-signpost-2',
    }
];
// assets
import { IconKey, IconReceipt2, IconBug, IconBellRinging, IconPhoneCall } from '@tabler/icons';

import { useTranslation } from 'react-i18next';

// constant
const icons = {
    IconKey: IconKey,
    IconReceipt2: IconReceipt2,
    IconBug: IconBug,
    IconBellRinging: IconBellRinging,
    IconPhoneCall: IconPhoneCall
};

//-----------------------|| EXTRA PAGES MENU ITEMS ||-----------------------//

const usePages = () => {
    const { t } = useTranslation();

    const pages = {
        id: 'pages',
        title: t('menu.menu5'),
        caption: t('menu.menu5_cation'),
        type: 'group',
        children: [
            {
                id: 'authentication',
                title: t('menu.menu5__title_1'),
                type: 'collapse',
                icon: icons['IconKey'],
                children: [
                    {
                        id: 'login',
                        title: t('menu.menu5__title_1--children1'),
                        type: 'item',
                        url: '/login',
                        target: true
                    },
                    {
                        id: 'register',
                        title: t('menu.menu5__title_1--children2'),
                        type: 'item',
                        url: '/register',
                        target: true
                    }
                ]
            }
        ]
    };

    return { pages };
};

export default usePages;

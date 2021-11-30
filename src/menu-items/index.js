import useDashboard from './useDashboard';

import usePages from './usePages';
import useOther from './useOther';

//-----------------------|| MENU ITEMS ||-----------------------//

const useIndex = () => {
    const { dashboard } = useDashboard();
    const { pages } = usePages();
    const { other } = useOther();

    const menuItems = {
        items: [dashboard, pages, other]
    };
    return { menuItems };
};

export default useIndex;

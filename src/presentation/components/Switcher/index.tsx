// import useTheme  from "@hooks/useTheme";
import { toggleThemeAction } from "@store/actions/theme.actions";
import { motion } from "framer-motion";
import { RootState } from "@store/index";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
const spring = {
    type: "spring",
    damping: 30,
    duration: 2
};

const animationVariants = {
    start: {
        rotate: 0,
    },
    end: {
        rotate: 360,
    },
};

const animationTransition = {
    duration: 0.3,
};

const Switcher = () => {
    const dispatch = useDispatch();
    const toggleTheme = () => { dispatch(toggleThemeAction()) };
    const theme = useSelector((state: RootState) => state.theme);

    return (
        <motion.div data-ison={theme === 'dark'} onClick={toggleTheme} className='flex w-[60px] h-[34px] relative justify-between switcher rounded-3xl bg-gray-200 dark:bg-dark-trans  p-[1px]'>
            {
                theme === 'dark' ?
                    (
                        <motion.svg
                            initial="start"
                            animate="end"
                            variants={animationVariants}
                            transition={animationTransition}
                            className='absolute right-1 top-1 z-30'
                            width="25" height="25" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg" >
                            <path className="fill-[#22d3ee]" d="M28.1558 17.3937C27.2523 17.6336 26.3214 17.7551 25.3865 17.755C22.5398 17.755 19.8665 16.6483 17.8585 14.6403C16.5399 13.3141 15.5919 11.6655 15.1091 9.85873C14.6262 8.05198 14.6253 6.15021 15.1065 4.34301C15.1666 4.11705 15.1662 3.87927 15.1054 3.6535C15.0446 3.42774 14.9255 3.22194 14.76 3.05675C14.5945 2.89155 14.3885 2.77277 14.1627 2.71232C13.9368 2.65187 13.699 2.65188 13.4732 2.71234C11.2107 3.31525 9.14659 4.50251 7.48784 6.15501C2.29051 11.3523 2.29051 19.8123 7.48784 25.0123C8.72321 26.2546 10.1927 27.2395 11.8112 27.9101C13.4298 28.5807 15.1652 28.9236 16.9172 28.919C18.6687 28.9239 20.4037 28.5813 22.0218 27.9109C23.64 27.2405 25.109 26.2558 26.3438 25.0137C27.9976 23.3546 29.1854 21.2894 29.7878 19.0257C29.8477 18.7998 29.8472 18.5622 29.7864 18.3366C29.7256 18.111 29.6067 17.9053 29.4415 17.7401C29.2762 17.5748 29.0705 17.4559 28.8449 17.3951C28.6193 17.3343 28.3817 17.3338 28.1558 17.3937ZM24.4598 23.1283C23.4718 24.1218 22.2965 24.9094 21.0021 25.4457C19.7076 25.9819 18.3196 26.2561 16.9185 26.2523C15.5169 26.2558 14.1285 25.9814 12.8336 25.445C11.5387 24.9085 10.363 24.1207 9.37451 23.127C5.21718 18.9683 5.21718 12.2003 9.37451 8.04168C10.1779 7.23924 11.1053 6.57156 12.1212 6.06434C11.9725 7.98309 12.2398 9.91132 12.9048 11.7173C13.5698 13.5232 14.6169 15.1643 15.9745 16.5283C17.3356 17.8902 18.9762 18.9402 20.7829 19.6057C22.5896 20.2712 24.5193 20.5365 26.4385 20.383C25.9285 21.3972 25.2607 22.3238 24.4598 23.1283Z" fill="black" />
                        </motion.svg>
                    )
                    :
                    (
                        <motion.svg
                            initial="start"
                            animate="end"
                            variants={animationVariants}
                            className='absolute left-1 top-1 z-30'
                            transition={animationTransition}
                            width="25" height="25" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="fill-[#22d3ee]" d="M9.82406 16.0003C9.82406 19.6817 12.8187 22.6763 16.5001 22.6763C20.1814 22.6763 23.1761 19.6817 23.1761 16.0003C23.1761 12.319 20.1814 9.32433 16.5001 9.32433C12.8187 9.32433 9.82406 12.319 9.82406 16.0003ZM16.5001 11.991C18.7107 11.991 20.5094 13.7897 20.5094 16.0003C20.5094 18.211 18.7107 20.0097 16.5001 20.0097C14.2894 20.0097 12.4907 18.211 12.4907 16.0003C12.4907 13.7897 14.2894 11.991 16.5001 11.991ZM15.1641 25.3337H17.8307V29.3337H15.1641V25.3337ZM15.1641 2.66699H17.8307V6.66699H15.1641V2.66699ZM3.16406 14.667H7.16406V17.3337H3.16406V14.667ZM25.8307 14.667H29.8307V17.3337H25.8307V14.667ZM6.1254 24.4843L8.95206 21.655L10.8387 23.5403L8.01206 26.3697L6.1254 24.4843ZM22.1534 8.45899L24.9827 5.62966L26.8681 7.51499L24.0387 10.3443L22.1534 8.45899ZM8.95606 10.3457L6.12673 7.51633L8.0134 5.63099L10.8401 8.46032L8.95606 10.3457ZM26.8681 24.4857L24.9827 26.371L22.1534 23.5417L24.0387 21.6563L26.8681 24.4857Z" fill="#FAFAFA" />
                        </motion.svg>
                    )
            }
            <motion.div className="w-[34px] h-full bg-white dark:bg-blue-950 rounded-[40px]" layout transition={spring} />
        </motion.div>
    )
}

export default Switcher;
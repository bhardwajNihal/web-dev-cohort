import { atom, selector } from "recoil"; 

export const networkAtom = atom({
    key: 'networkAtom',
    default: 105
})

export const jobsAtom = atom({
    key: 'jobsAtom',
    default: 0
})

export const messageAtom = atom({
    key: 'messageAtom',
    default: 45
})

export const notificationAtom = atom({
    key: 'notificationAtom',
    default: 15
})

export const TopbarTotal = selector({
    key : 'TopbarTotal',
    get : ({get}) => {
        const networkCount = get(networkAtom);
        const jobCount = get(jobsAtom);
        const messageCount = get(messageAtom);
        const notificationCount = get(notificationAtom);

        return networkCount + jobCount + messageCount + notificationCount;
    }
})
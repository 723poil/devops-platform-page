export const formatKSTDateTime = (dateTime: string | number): string => {
    if (dateTime === -1) {
        return 'None';
    }

    const date: Date = new Date(dateTime);

    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false, // 24시간 표기법 사용
        timeZone: 'Asia/Seoul' // 한국 시간대 설정
    };

    const formatter: Intl.DateTimeFormat = new Intl.DateTimeFormat('ko-KR', options);
    const formattedDate: string = formatter.format(date);

    return formattedDate.replace(/\./g, '-').replace(/\s/g, ' ').replace(/:/g, ':');
}
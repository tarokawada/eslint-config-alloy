/**
 * 解析描述或原因，转换 <, >, \n, ` 等字符串
 * @param str 需要解析的文本
 */
export function parseDescription(str: string) {
    return (
        str
            .replace(/\</g, '&lt;')
            .replace(/\>/g, '&gt;')
            // .split('')
            // .map((letter) => {
            //     if (letter !== '`') {
            //         return letter;
            //     }
            //     isOpen = !isOpen;
            //     if (isOpen) {
            //         return '<code>';
            //     }
            //     return '</code>';
            // })
            // .join('')
            .replace(/[a-zA-Z0-9\(\)\[\]\{\}\\\/'"_\-\+\?\.\*!=\&\@\#~:; ]+/g, (codes) => {
                const matchSpaces = codes.match(/^( *)(.*?)( *)$/);
                if (matchSpaces === null) {
                    return `<code>${codes}</code>`;
                }
                return `${matchSpaces[1]}<code>${matchSpaces[2]}</code>${matchSpaces[3]}`;
            })
            .replace(/\n/g, '<br/>')
            .replace(/禁止/g, '<strong style="color:#db5757; font-weight:600;">$&</strong>')
            .replace(/必须/g, '<strong style="color:#267fd9; font-weight:600;">$&</strong>')
    );
}

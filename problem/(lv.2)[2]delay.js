/**
 * Q. delay(ms) 함수
 *
 * - delay(ms) 함수를 작성하세요.
 * - setTimeout 사용해서 ms 후에 "done"을 resolve하는 Promise를 반환합니다.
 *
 * @param {number} ms
 * @returns {Promise<string>} "done"
 */

// TODO: delay 함수를 작성하세요.

// const promiseA = new Promise((resolve) => setTimeout(() => resolve('A'), 100));

async function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => resolve("done"),ms)
    })
}

// export를 수정하지 마세요.
export { delay };

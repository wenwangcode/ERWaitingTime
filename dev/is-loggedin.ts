/**
 * Created by Joy on 2016-03-28.
 */
export function isLoggedin() {
    return !!localStorage.getItem('token');
}
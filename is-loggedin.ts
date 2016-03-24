/**
 * Created by Joy on 2016-03-21.
 */
export function isLoggedin() {
    return !!localStorage.getItem('token');
}
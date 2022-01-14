#include <bits/stdc++.h>
using namespace std;
#define endl "\n"
#define int long long
#define ll  long long
#define pi  (3.141592653589)
#define mod 1000000007
#define float double
#define pb               push_back
#define mp               make_pair
#define ff               first
#define ss               second
#define all(c)           c.begin(), c.end()
#define min3(a, b, c)    min(c, min(a, b))
#define min4(a, b, c, d) min(d, min(c, min(a, b)))
#define rfo(i, a, b)     for (int i = (int)a; i >= (int)b; i--)
#define fo(i, a, b)      for (int i = (int)a; i <= (int)b; i++)
#define watch(x)         cout << (#x) << " is " << (x) << endl
#define see(x)           cout << (x) << endl
#define hh               cout << endl
#define INF              1e18
#define fast             ios_base::sync_with_stdio(false), cin.tie(nullptr), cout.tie(nullptr);

template <typename C,
          typename T = std::decay_t<decltype(*begin(std::declval<C>()))>,
          typename std::enable_if<!std::is_same<C, std::string>::value>::type * = nullptr>
std::ostream &operator<<(std::ostream &os, const C &container) {
    bool first = true;
    std::stringstream ss;
    ss << '[';
    for (const auto &x : container) {
        if (!first) {
            ss << ", ";
        }
        first = false;
        ss << x;
    }
    ss << ']';
    return os << ss.str();
}

/**
 * @brief
 *
 * @tparam T1
 * @tparam T2
 * @param os
 * @param p
 * @return std::ostream&
 */
template <class T1, class T2>
std::ostream &operator<<(std::ostream &os, const std::pair<T1, T2> &p) {
    os << '{' << p.first << ", " << p.second << '}';
    return os;
}

/**
 * @brief
 *
 * @param a
 * @param b
 * @return ll
 */
ll mod_pow(ll a, ll b) {
    if (b < 0) return 0;
    a %= mod;
    if (b == 0) return 1;
    if (b == 1) return a % mod;
    if (b == 2) return ((a % mod) * (a % mod)) % mod;
    return (mod_pow(mod_pow(a, b / 2), 2) * mod_pow(a, b % 2)) % mod;
}

bool isPrime(int n) {
    if (n == 1) return false;
    if (n == 2) return true;
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}

//! Helrljlak
//~ akdskaklsd
//_afkdljlkjklfd
//? dsaklfksdj
//* asdkjfklsdkf

// REVIEW : HACK : TODO : BUG : FIXME : EXAMPLE : HACK : IMP : NOTE : REF : TEST : WARN :

// Keep calm and Keep coding //

/**
 * @brief
 *
 */
void solve() {
    int n, m;
    cin >> n;

    return;
    red;
}

int32_t main() {
    fast int tc = 1;
    cin >> tc;
    while (tc--) {
        solve();
    }
    return 0;
}

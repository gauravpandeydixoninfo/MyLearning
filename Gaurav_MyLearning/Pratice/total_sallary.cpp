#include<iostream>
using namespace std;

int main()
{
    int basic, totall; 
    float hra, ta, pf, total, check ;
    float hrap, tap, pfp ;
    cout << "\nEnter the basic sallary = " ;
    cin >> basic ;
    cout << "\nEnter the hra percentage to be calcualted from basic sallary = ";
    cin >> hrap ; 
    cout << "\nEnter the ta percentage to be calcualted from basic sallary = " ;
    cin >> tap ; 
    cout << "\nEnter the pf percentage to be calcualted from basic sallary = ";
    cin >> pfp; 
    hra = basic*hrap*0.01;
    tap = basic*tap*0.01;
    pf = basic*pfp*0.01;
    total = basic + hra + tap - pf;
    totall = total;
    check = total - totall ;
    if ( check >= 0.5 )
    {
        totall = totall + 1 ;
    }
    cout<<"\ntotal in hand sallary is = " << totall << "\n" ;
    return 0 ;
}


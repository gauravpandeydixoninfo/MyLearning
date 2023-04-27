/* 
ap is 3n+2
we have to print number of terms as per user
and a condition that th series term is not a multiple of particular number*/
#include<iostream>
using namespace std;
int main()
{
    int k=0, i=0, sum=0, n=0;
    int no_terms;
    int nd;
    cout<<"\n Enter no of terms you want to print=";
    cin>>no_terms;
    cout<<"\nEnter the number of whose multiple in ap you do not want to include";
    cin>>nd;
    while(n!=no_terms)
    {   i++;
        k= (3*i) +2;
        if(k%nd!=0)
        {
            cout<<k<<"\n";
            n++;
        }
    }
    return 0;
}


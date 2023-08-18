#include<iostream>
#include<stdio.h>
using namespace std;
class fraction
{
    int num;
    int const den;
    public:
    fraction(int num, int den):num(num), den(den){
        cout<<"\n constructor called\n";
    }
     void  display() const
    {
        cout<<"\nnumerator="<<num;
        cout<<"\ndeominator="<<den<<"\n";
    }
};
int main()
{
    fraction f1(5, 6);
    f1.display();
    fraction const f2(9, 56);
    f2.display();
    return 0;

}

    


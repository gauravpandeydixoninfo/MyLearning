#include<iostream>
#include<stdio.h>
using namespace std;
class fraction
{
    int num;
    int den;
    public:
    fraction()
    {
        cout<<"\ndefault constructor\n";
    }
    fraction(int i, int j)
    {
        num=i;
        den=j;
    }
    void display()
    {
        cout<<"\n num="<<num<<"/"<<den<<"\n";
    }
    void add(fraction const &f1)
    {   cout<<"num="<<f1.num<<"\n";
        cout<<"den="<<f1.den<<"\n";
        int lwd=den*f1.den;
        int mul1=lwd/den;
        int mul2= lwd/f1.den;
        num= mul1*num + mul2*f1.num;
        den=lwd;
    }
    void simplfy()
    {
        int j= min(num, den);
        int div=1;
        for(int i=1; i<= j; i++)
        {
            if(num%i==0 && den%i==0)
            {
                div=i;
            }
        }
        num=num/div;
        den=den/div;
    }
};
int main()
{
    fraction s1(5,10);
    s1.display();
    fraction s2(10,20);
    s2.add(s1);
    s2.display();
    s2.simplfy();
    s2.display();
    return 0;
}








 

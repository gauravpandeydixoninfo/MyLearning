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
    int operator+(fraction const &f1)
    {   cout<<"num="<<f1.num<<"\n";
        cout<<"den="<<f1.den<<"\n";
        int lwd=den*f1.den;
        int mul1=lwd/den;
        int mul2= lwd/f1.den;
        num= mul1*num + mul2*f1.num;
        den=lwd;
        fraction f3;
        f3.num=num;
        f3.den=den;
        //return f3;
        int num=num;
        cout<<"\nvalue of num in function="<<num<<"\n";
        return 5;
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
    fraction operator==(fraction const &f2) const{
    if((num==f2.num)&&(den==f2.den))
    {
        cout<<"fraction are equal\n";
        return f2;
    }
    else
    {
        cout<<"\nfraction are not equal\n";
        return f2;
    }
}

};

int main()
{
    fraction s1(10,10);
    s1.display();
    fraction s2(10,10);
    s2.display();
    int s3=s1+s2;
    bool a;
    fraction f3;
    f3=s1==s2;
    cout<<"value of s3="<<s3<<"\n";
    return 0;
}


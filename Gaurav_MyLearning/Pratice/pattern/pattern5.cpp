/*pattern to print
 A
 AB
 ABC
 ABCD
 ABCDE
 ABCDEF
 */
#include<iostream>
using namespace std;
int main()
{
    //int num=0;
    for(int i=1; i<=5; i++)
    {   
        char num='A';
        for(int j=1; j<=i ; j++)
        {
            cout<< num;
            num++;
        }
        cout<<"\n";
    }
    return 0;
}


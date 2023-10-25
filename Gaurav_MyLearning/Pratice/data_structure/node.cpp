#include<iostream>
using namespace std;
#include "node_struct.cpp"
Node* addnode(){
    int data;
    //cout<<"\n Enter the value of data=";
    cin>>data;
    Node *head=NULL;
    while(data!=-1)
    {
        Node *newNode=new Node(data);
        if(head==NULL){
            head=newNode;
        }
        else{
            Node *temp=head;
            while(temp->next!=NULL){
                temp=temp->next;
                
            }
            temp->next=newNode;
            //cout<<"\nEnter value of data=";
            
        }
        cin>>data;
    }
    return head;
}
void mid(int place, Node *head){
    int temp=place-1;
    int i=1;
    while(i!=temp)
    {
        head=head->next;
        i++;
    }
    Node *nextnode=head->next;
    int newdata;
    cout<<"\n Enter the data which you want to enter=";
    cin>>newdata;
    Node *newone=new Node(newdata);
    newone->next=nextnode;
    head->next=newone;
}




void print(Node *head){

    while(head!=NULL){
        cout<<head->data<<" ";
        head=head->next;
}
};
int main(){

 /* node s1(1);
  node s2(2);
  node s3(3);
  node s4(4);
  node s5(5);
  s1.next=&s2;
  s2.next=&s3;
  s3.next=&s4;
  s4.next=&s5;
  s5.next=NULL;
  node *head=&s1;*/
  Node *head=addnode();

  print(head);
  mid(3,head);
  print(head);

  /*s1.next=&s2;
  cout<<s1.data<<"\n";
  cout<<s2.data<<"\n";
  cout<<"address od s2="<<&s2;
  cout<<"\nvalue of s1.next="<<s1.next<<"\n";
  cout<<"\nvalue of &s1="<<&s1<<"\n";
  cout<<"\nvalue of head="<<head<<"\n";*/
  return 0;

}

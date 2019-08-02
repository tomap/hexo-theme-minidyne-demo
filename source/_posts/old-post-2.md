---
title: old post 2
date: 2002-02-02
---
First test post
```
<beans xmlns="http://www.springframework.org/schema/beans"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.springframework.org/schema/beans 
      http://www.springframework.org/schema/beans/spring-beans.xsd">

  <bean id="knight" class="sia.knights.BraveKnight">
    <constructor-arg ref="quest" />
  </bbean>

  <bean id="quest" class="sia.knights.SlayDragonQuest">
    <constructor-arg value="#{T(System).out}" />
  </bean>

</beans>
```


Illegal char ? 

post.charCodeAt(428)
// 8232
String.fromCharCode(8232)
// ' 

Or not?



other test:

some text here

1. step 1

    ```
    sudo dpkg -i chrome.deb
    sudo apt-get install -f
    ```

2. step 2

    ```
    sudo apt-get install gdebi
    ```
    install with gdebi
    
Code that can not be displayed as expected

some text here

1. step 1

    ```
    sudo dpkg -i chrome.deb
    sudo apt-get install -f
    ```

2. step 2

    ```
    sudo apt-get install gdebi
    ```
    
    install with gdebi

Load balancing refers to efficiently distributing incoming network traffic across a group of backend servers, also known as a server farm or server pool.

Load balancing distributes server loads across multiple resources — most often across multiple servers. The technique aims to reduce response time, increase throughput, and in general speed things up for each end user.

Modern high‑traffic websites must serve hundreds of thousands, if not millions, of concurrent requests from users or clients and return the correct text, images, video, or application data, all in a fast and reliable manner. To cost‑effectively scale to meet these high volumes, modern computing best practice generally requires adding more servers.

A load balancer acts as the “traffic cop” sitting in front of your servers and routing client requests across all servers capable of fulfilling those requests in a manner that maximizes speed and capacity utilization and ensures that no one server is overworked, which could degrade performance. If a single server goes down, the load balancer redirects traffic to the remaining online servers. When a new server is added to the server group, the load balancer automatically starts to send requests to it.

Loads are broken up based on a set of predefined metrics, such as by geographical location, or by the number of concurrent site visitors.

Members of a certain group — such as ‘people living in Europe’, for example, may be directed to a server within Europe, while members of another group take, for instance, ‘North Americans’ may be directed to another server, closer to them.

In this manner, a load balancer performs the following functions:

    Distributes client requests or network load efficiently across multiple servers
    Ensures high availability and reliability by sending requests only to servers that are online
    Provides the flexibility to add or subtract servers as demand dictates

Load Balancing Algorithms

Different load balancing algorithms provide different benefits; the choice of load balancing method depends on your needs:

    Round Robin — Requests are distributed across the group of servers sequentially.
    Least Connections — A new request is sent to the server with the fewest current connections to clients. The relative computing capacity of each server is factored into determining which one has the least connections.
    IP Hash — The IP address of the client is used to determine which server receives the request.

Load balancers are generally grouped into two categories: Layer 4 and Layer 7. Layer 4 load balancers act upon data found in network and transport layer protocols (IP, TCP, FTP, UDP). Layer 7 load balancers distribute requests based upon data found in application layer protocols such as HTTP.

Layer 7 load balancers can further distribute requests based on application specific data such as HTTP headers, cookies, or data within the application message itself, such as the value of a specific parameter.
Session Persistence or Sticky Sessions

Information about a user’s session is often stored locally in the browser. For example, in a shopping cart application, the items in a user’s cart might be stored at the browser level until the user is ready to purchase them. Changing which server receives requests from that client in the middle of the shopping session can cause performance issues or outright transaction failure. In such cases, it is essential that all requests from a client are sent to the same server for the duration of the session. This is known as session persistence. A method used with Application Load Balancing, to achieve server-affinity.

The best load balancers can handle session persistence as needed. Another use case for session persistence is when an upstream server stores information requested by a user in its cache to boost performance. Switching servers would cause that information to be fetched for the second time, creating performance inefficiencies.

    Advantages

    Reasonably simple to implement for experienced network administrators.
    Reduces the need to implement session-failover, as users are only sent to other servers if one goes offline.
    Load balancer/router is often responsible for detecting offline servers, providing faster request-failover than round-robin DNS-based load balancing.

    Disadvantages

    Difficult to set up for network administrators who are new to sticky sessions.
    Problems can be difficult to diagnose. See the sections below for the main issues.
    The load-balancer/router must be load-balanced itself, or it becomes a point of failure that will take down an entire cluster.
    Cannot provide global load-balancing (whereas round-robin DNS can).
    Session-failover is often not implemented, as there is reduced need. If a server goes offline, all users lose their session.

Dynamic Configuration of Server Groups

Many fast‑changing applications require new servers to be added or

taken down on a constant basis. This is common in environments such as the Amazon Web Services (AWS) Elastic Compute Cloud (EC2), which enables users to pay only for the computing capacity they actually use, while at the same time ensuring that capacity scales up in response traffic spikes. In such environments, it greatly helps if the load balancer can dynamically add or remove servers from the group without interrupting existing connections.
Hardware vs. Software Load Balancing

Load balancers typically come in two flavours: hardware‑based and software‑based. Vendors of hardware‑based solutions load proprietary software onto the machine they provide, which often uses specialized processors. To cope with increasing traffic on your website, you have to buy more or bigger machines from the vendor. Software solutions generally run on commodity hardware, making them less expensive and more flexible. You can install the software on the hardware of your choice or in cloud environments like AWS EC2.

Load balancers ensure reliability and availability by monitoring the “health” of applications and only sending requests to servers and applications that can respond in a timely manner, helps you maximize both customer satisfaction and the return on your IT investments.

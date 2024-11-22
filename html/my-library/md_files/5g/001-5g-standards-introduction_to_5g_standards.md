---
title: 슬라이드 제목
paginate: true
theme: default
marp: true
---

# Introduction to 5G Standards

source : 3GPP
---

## What is 5G?

- The Fifth Generation of Mobile Telephony, or 5G, is the system defined by 3GPP from Release 15.
- Functionally frozen in June 2018 and fully specified by September 2019.
- Includes air interface protocols, network interfaces for call and session control, mobility management, and service provisioning.
- Operates in an inter-vendor and inter-operator context.

---

## Phases of 5G

### Release 15 – Phase 1

- Introduces new radio transmission techniques.
- Key concepts:
  - Industry-grade reliability
  - Extended modularity
  - Faster response time

---

## 5G Applications

- Designed not only for wider audiences, but also for:
  - Time-critical applications (e.g., autonomous driving).
  - Industry sectors beyond just consumer use.

---

## Key Technologies Enabling 5G

- **Network Function Virtualization (NFV):** Increases modularity.
- **Slicing:** Enhances customization and efficiency.
- **Edge Computing:** Provides faster response times.
- **Non-Terrestrial Networks (NTN)/Satellite Communications:** Ensures ubiquitous coverage.

---

# The Road to 5G

---

## 3GPP's Role in Mobile Generations

- 3GPP has played a major role in defining mobile standards since the 1980s.
- Each generation has improved on the last, with specifications evolving in 3GPP Releases.
- 3GPP started work on the third generation (3G) in 1998, aiming for global convergence.

---

## Global Adoption of 3GPP Standards

- Over 800 operators delivering LTE (4G).
- 150 operators already offering 5G.
- Continued global expansion and market growth driven by 3GPP standards.

---

## Conclusion

- 3GPP's ongoing work and global adoption have paved the way for the evolution to 5G.
- 5G is ready to power critical sectors like autonomous driving and more.


---

# 5G Services

---

## Enhanced Mobile Broadband (eMBB)

- Higher data rates specified for 5G:
  - **Downlink:**
    - Up to 50 Mbps for outdoor
    - 1 Gbps for indoor (5GLAN)
  - **Uplink:** Half of these values available.
- Case study: Aviation – delivering 1.2 Gbps to an airborne flight.

---

## Critical Communications (CC) & Ultra Reliable and Low Latency Communications (URLLC)

- Extremely high reliability for specific use cases:
  - **Example:** Remote control of process automation.
  - Expected reliability: 99.9999%
  - User experienced data rate: Up to 100 Mbps
  - End-to-end latency: 50 ms
- Provided in particular through **Edge Computing**.

---

## Massive Internet of Things (mIoT)

- Supports very high traffic densities of devices.
- Includes operational aspects for a wide range of IoT devices and services.
- Key to supporting the **Massive Internet of Things** in the 5G era.

---

## Flexible Network Operations

- Key specificities offered by the 5G system:
  - **Network slicing**
  - **Network capability exposure**
  - **Scalability**
  - **Diverse mobility**
  - **Security**
  - **Efficient content delivery**
  - **Migration and interworking**

---

## Further Information

- **Release 15 Description**; Summary of Rel-15 Work Items (TR 21.915)
- **Service requirements for the 5G system** (TS 22.261)
- **NR and NG-RAN Overall description; Stage-2** (TS 38.300)

---

# 5G System Use Cases

---

## New Markets ("Verticals")

- **5G system supports diverse industries**:
  - Automotive, rail & maritime communications
  - Transport and logistics
  - Discrete automation
  - Electricity distribution
  - Public safety
  - Health and wellness
  - Smart cities
  - Media and entertainment

---

## 5G System Supporting 4G LTE Services

- **Supports almost all 4G LTE services**:
  - **Mobility** between a 5G core network and a 4G core network (EPC)
  - Minimum impact on user experience during transition

---

## Overall Architecture of the 5G System

- **Elements similar to previous generations**:
  - **User Equipment (UE)**: Composed of Mobile Station and USIM
  - **Radio Access Network (NG-RAN)**
  - **Core Network (5GC)**

---

## NG-RAN Architecture

- **Main entity: gNB**:
  - "g" for 5G
  - "NB" for Node B (radio transmitter name inherited from 3G)
- **Radio interface: NR-Uu**
  - "NR" stands for New Radio (5G)
  - "Uu" inherited from previous generations
- **Split architecture**:
  - gNB-Central Unit (gNB-CU)
  - One or more gNB-Distributed Unit(s) (gNB-DU)
  - Linked by **F1 interface**

---

## Figure 1: Overview of the 5GS

![Image](https://www.3gpp.org/images/2022/08/17/5g-fig1.png)

---


# 5GC Architecture Overview

---

## 5GC Core Elements

- **5GC Core Components**:
  - **User Plane Function (UPF)**: Handles user data
  - **Access and Mobility Management Function (AMF)**: Handles signaling with UE and (R)AN
- **Reference Point "NG"**:
  - Constituted by interfaces (mostly N2, N3)

---

## Service-Based Architecture (SBA)

- **Modular & Reusable Framework**:
  - Network Functions (NFs) are defined instead of traditional Network Entities
  - NFs offer services to authorized consumers via common framework interfaces
  - Provides flexibility, modularity, and reusability

---

## Figure 2: 5GS Architecture

![Image](https://www.3gpp.org/images/2022/08/17/5g-fig2.png)

---

## User Plane vs. Signaling Plane

- **User Plane (bottom)**:
  - Involves transport of user data through NFs
- **Signaling Plane (upper)**:
  - Essential NFs for control and management

---

## Key Network Functions (NFs)

- **Entities Introduced**:
  - UE, NG-RAN or (R)AN, UPF, and AMF
  - Data Network (DN) for user plane
- **Additional NFs**:
  - **Application Function (AF)**: Controls applications, possibly involved in the user plane
  - **Session Management Function (SMF)**: Manages sessions and interacts with UPF
  - **Unified Data Management (UDM)**: Similar to HSS (3G/4G) and HLR (2G)
  - **Policy Control Function (PCF)**: Controls user data traffic within negotiated bearers
  - **Network Repository Function (NRF)**: Manages NF register, deregister, and update services

---

## Security and Other Functions

- **Security-Related NFs**:
  - **Network Exposure Function (NEF)**
  - **Authentication Server Function (AUSF)**
  - **Security Anchor Functionality (SEAF)**
- **Network Slice Selection Function (NSSF)**: Manages network slicing
- **Charging Framework**:
  - Migrated to a converged charging service using Service-Based Interface (SBI)
  - Supports monetizing 5GS features and services

---

# 5G Protocol Stacks

---

## Control Plane Protocol Stack

- **UE-to-AMF and UE-to-SMF Protocol Stack**
  - The protocol stack between UE and SMF, via the AMF
  - Referenced in TS 23.501, Section 8.2

---

## Figure 3: Control Plane Protocol Stack

![Image](image_link_placeholder)

---

## NAS-SM (Session Management)

- **Session Management Handling**:
  - Manages user plane PDU Session Establishment, modification, and release
  - Transferred via AMF, and transparent to AMF
  - Defined in TS 24.501 ("Non-Access-Stratum (NAS) Protocol for 5G System (5GS); Stage 3")

---

## NAS-MM (Mobility Management)

- **Functionality**:
  - Supports registration, connection management, and user plane connection activation/deactivation
  - Handles ciphering and integrity protection of NAS signaling
  - Defined in TS 24.501

---

## 5G-AN Protocol Layer

- **Protocols for NG-RAN**:
  - Specifies the radio protocol between UE and NG-RAN node (eNodeB or gNodeB)
  - Defined in TS 36.300 (E-UTRA & E-UTRAN) and TS 38.300 (NR Overall Description)
  - Non-3GPP access is described in clause 8.2.4

---

## NG Application Protocol (NG-AP)

- **Application Layer Protocol**:
  - Communication between 5G-AN node and AMF
  - Defined in TS 38.413

---

## Stream Control Transmission Protocol (SCTP)

- **SCTP Protocol**:
  - Guarantees delivery of signaling messages between AMF and 5G-AN node (N2)
  - Defined in IETF RFC 4960

---

## Direct Communication: 5G-AN and SMF

- **N2 SM Information**:
  - Subset of NG-AP information relayed transparently by AMF between 5G-AN and SMF
  - Included in NG-AP and N11-related messages

---

## User Plane Protocol Stack

- **UE-to-AMF and UE-to-SMF Protocol Stack**:
  - Protocol stack for user plane transport related to PDU Session
  - Referenced in TS 23.501, Section 8.3

---

## Figure 4: User Plane Protocol Stack

![Image](https://www.3gpp.org/images/2022/08/17/5g-fig4.png)

---

# 5G Protocol Layers and Architecture

---

## PDU Layer

- **PDU Carried between UE and DN**:
  - When the PDU Session Type is IPv4 or IPv6 or IPv4v6:
    - Corresponds to IPv4 packets, IPv6 packets, or both
  - When the PDU Session Type is Ethernet:
    - Corresponds to Ethernet frames

---

## GPRS Tunnelling Protocol (GTP U)

- **Purpose**:
  - Tunnels user data over N3 (5G-AN node to UPF) and N9 (between different UPFs)
  - Encapsulates all end-user PDUs
  - Provides encapsulation on a per PDU Session level
  - Carries QoS Flow marking as defined in clause 5.7
  - Also used on the N4 interface (TS 29.244)

---

## 5G-AN Protocol Stack

- **Protocols for 5G-AN**:
  - Defined in TS 38.401 when using 3GPP NG-RAN
  - **Radio Protocol**:
    - Between UE and 5G-AN node (eNodeB or gNodeB)
    - Specified in TS 36.300 and TS 38.300
  - **L2 (Data Link Layer)** and **L1 (Physical Layer)**

---

## UDP/IP Protocols

- **Backbone Network Protocols**:
  - UDP/IP are used in the backbone network

---

## 5G Radio Interface (NR)

- **NR (New Radio)**:
  - Defined in TS 38.300 ("NR and NG-RAN Overall Description; Stage-2")
  
---

## Layer 1 Characteristics

- **Downlink (DL)**:
  - Uses **OFDM with Cyclic Prefix (CP)** (similar to LTE)
- **Uplink (UL)**:
  - Uses **OFDM** and **DFT-s-OFDM** (Discrete Fourier Transform)
  - **DFT-s-OFDM** improves UL coverage but limits to single-layer transmission

---

## 5G Frequency Ranges

- **Up to 1 GHz**:
  - Better propagation for rural areas, maximum bandwidth of 100 MHz per carrier
- **1 to 6 GHz**:
  - Intermediate range for urban/sub-urban areas, maximum bandwidth of 100 MHz per carrier
- **Above 6 GHz**:
  - Higher bandwidth (up to 400 MHz), for dense urban "hot-spot" areas

---

## Non-Stand Alone (NSA) vs. Stand-Alone (SA) Architecture

- **NSA Architecture**:
  - 5G Radio Access Network (NR) used with existing LTE and EPC infrastructure (4G Core Network)
  - Supports only 4G services but benefits from 5G's capabilities (e.g., lower latency)
  - Known as **E-UTRA-NR Dual Connectivity (EN-DC)** or **Architecture Option 3**
  - Temporary step towards full 5G deployment
- **SA Architecture**:
  - NR is connected directly to the 5G Core Network (5GC)
  - Full set of 5G services supported

---

## Figure 5: NSA Architecture

![Image](https://www.3gpp.org/images/2022/08/17/5g-fig6.png
)

---

## NSA Architecture Details

- **Dual Connectivity**:
  - 4G's eNB (Master Node) and 5G's en-gNB (Secondary Node)
  - X2 interface connects eNB and en-gNB
- **EN-DC**:
  - Provides dual connectivity via both 4G (E-UTRA) and 5G (NR)
  - eNB acts as Master Node, en-gNB as Secondary Node
  - Detailed explanation in the dedicated NSA section
---


# 5G Stand-Alone (SA) Architecture

---

## The SA Architecture

- **Full 5G Deployment**:
  - Does not require any part of a 4G network to operate.
  
- **NR Base Stations**:
  - Logical node "gNB" connects via the **Xn interface**.
  
- **Access Network (NG-RAN for SA)**:
  - Connects to the 5G Core Network (5GC) using the **NG interface**.

---

## Key New Technologies in 5G

---

### Network Slicing

- **Definition**:
  - Deploy and use multiple CNs simultaneously, each specialized for specific services or subscribers.
  
- **Examples**:
  - A slice for the operator’s subscribers.
  - A slice for a virtual operator’s subscribers.
  - A slice for services like tracking containers via M2M.

---

### Network Function Virtualization (NFV)

- **Description**:
  - Network functions communicate through a common interface.
  - NFV allows Network Functions (NF) to be located anywhere for flexible deployment.
  - Simplifies maintenance, with temporary NFs easily established.

---

### EDGE Computing

- **Purpose**:
  - Brings computational power closer to the end user for latency-sensitive applications.
  
- **Examples**:
  - Virtual Reality (VR)
  - Autonomous Driving
  - Factories of the Future
  
- **Goal**:
  - Reduces network response times by introducing "local replicas" of main servers closer to users.

---

## Going Further

- **Key 5G Specifications**:
  - **TS 22.261**: Service requirements for the 5G system.
  - **TS 23.501**: System architecture for 5G System (5GS).
  - **TS 23.502**: Procedures for the 5GS.
  - **TS 32.240**: Charging management, architecture, and principles.
  - **TS 24.501**: Non-Access-Stratum (NAS) protocol for 5GS.
  - **TS 38.300**: NR and NG-RAN Overall description.

---

## Referenced Specifications

- **Service Requirements**:
  - **TS 22.278**: Service requirements for the Evolved Packet System (EPS).
  - **TS 22.011**: Service accessibility.
  - **TS 22.101**: Service aspects and principles.
  - **TS 22.185**: V2X service requirements.
  - **TS 22.071**: Location Services (LCS) service description.
  - **TS 22.115**: Charging and billing.
  - **TS 22.153**: Multimedia priority service.
  - **TS 22.173**: IMS multimedia telephony service.
  - **TS 22.186**: Enhanced V2X scenarios.

---
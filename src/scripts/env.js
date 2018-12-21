env = {
    // Add a cluster prefix if your /api endpoint is behind a cluster prefix as Rancher does.
    //
    // - Run kubectl config view and find the cluster server for the current context.
    //   Include any text after the port.

    // example with cluster prefix:
    // ...
    // name: kubernetes
    // - cluster:
    //    server: https://rancher.myserver.com:9443/k8s/clusters/c-wnhw2

    // CLUSTER_PREFIX: '/k8s/clusters/c-wnhw2'

    // example without cluster prefix:
    // ...
    // name: kubernetes
    // - cluster:
    //    server: https://rancher.myserver.com:9443

    CLUSTER_PREFIX: ''
}